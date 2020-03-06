import React from 'react';
import
{
    List, Show, Edit, Filter, Create, Datagrid, TabbedShowLayout, 
    SimpleForm, TextInput, TextField, ReferenceField, ImageField, 
    ReferenceInput, SelectInput, ImageInput, Tab, ArrayField, ArrayInput,
    TabbedForm, FormTab, SimpleFormIterator, Title, SimpleShowLayout,
    FunctionField
} from 'react-admin';
import AlbumIcon from '@material-ui/icons/Album';
import { Actions } from '../customs';
import { LinkField, YtbPlayer, TracklistSortInput, ImageList, AlbumRatingField, AlbumRatingInput } from '../components';

const getSourceAndLabel = src =>
({
    source: src,
    label: `resources.albums.fields.tracklist.${src}`,
});

const ExpandField = ({ record, basePath, resource }) =>
{

    const props = { record, basePath, resource };

    const getForm = () =>
    {
        return <SimpleShowLayout {...props}>
            <YtbPlayer {...getSourceAndLabel("url")} />
        </SimpleShowLayout>;
    }

    return getForm(record);
};

const AlbumFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" />
        <ReferenceInput source="bandId" reference="bands">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="genreId" reference="genres">
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const AlbumList = props => (
    <List filters={<AlbumFilter />} actions={<Actions />} sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid rowClick="show">
            <ImageList />
            <TextField source="name" />
            <ReferenceField source="bandId" reference="bands" link="show">
                <LinkField source="name" />
            </ReferenceField>
            <ReferenceField source="genreId" reference="genres" link="show">
                <LinkField source="name" />
            </ReferenceField>
            <AlbumRatingField source="rating" />
        </Datagrid>
    </List>
);

const AlbumShow = props => (
    <Show actions={<Actions />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="year" />
            <ReferenceField source="bandId" reference="bands" link="show">
                <LinkField source="name" />
            </ReferenceField>
            <ReferenceField source="genreId" reference="genres" link="show">
                <LinkField source="name" />
            </ReferenceField>
            <ImageField source="img" />
            <AlbumRatingField addLabel={true} label="resources.albums.fields.rating" source="rating" />
            <ArrayField source="tracklist">
                <Datagrid rowClick="expand" expand={<ExpandField />}>
                    <TextField source="songName" />
                    <FunctionField render={record => `Click to expand`} />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

const AlbumEdit = props => (
    <Edit {...props}>
        <TabbedForm redirect="show">
            <FormTab label="summary">
                <TextInput source="id" disabled={true} />
                <TextInput source="name" />
                <TextInput source="year" />
                <ReferenceInput source="bandId" reference="bands" allowEmpty>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="genreId" reference="genres" allowEmpty>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <AlbumRatingInput addLabel={true} label="resources.albums.fields.rating" source="rating" />
            </FormTab>
            <FormTab label="tracklist" path="tracklist">
                <ArrayInput source="tracklist">
                    <SimpleFormIterator>
                        <TextInput {...getSourceAndLabel("songName")} />
                        <TextInput {...getSourceAndLabel("url")} />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
            <FormTab label="tracklist sort" path="tracklist-sort">
                <TracklistSortInput source="tracklist" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

const AlbumCreate = props => (
    <Create title="resources.albums.create" {...props}>
        <SimpleForm redirect="show">
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default {
    name: "albums",
    icon: AlbumIcon,
    list: AlbumList,
    show: AlbumShow,
    edit: AlbumEdit,
    create: AlbumCreate,
    hasJson: true
};
