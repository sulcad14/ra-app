import React from 'react';
import
{
    List, Show, Edit, Filter, Create, Datagrid, TabbedShowLayout, 
    SimpleForm, TextInput, TextField, ReferenceField, RichTextField,
    ReferenceArrayField, SingleFieldList, ReferenceInput, Tab,
    ReferenceArrayInput, SelectInput, SelectArrayInput, 
    ImageField, ImageInput, BooleanField, BooleanInput,
    TabbedForm, FormTab, ArrayField, SimpleShowLayout, FunctionField
} from 'react-admin';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { Actions } from '../customs';
import RichTextInput from 'ra-input-rich-text';
import { LinkField, DiscographySortField, DiscographySortInput } from '../components';

const BandFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" />
        <ReferenceField source="genreId" reference="genres" link="show">
            <LinkField source="name" />
        </ReferenceField>
        <ReferenceField source="countryId" reference="countries" link="show">
            <LinkField source="name" />
        </ReferenceField>
    </Filter>
);

const BandList = props => (
    <List filters={<BandFilter />} actions={<Actions />} sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
            <ReferenceField source="genreId" reference="genres" link="show">
                <LinkField source="name" />
            </ReferenceField>
            <ReferenceField source="countryId" reference="countries" link="show">
                <LinkField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

const BandShow = props => (
    <Show actions={<Actions />} {...props}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField source="id" />
                <TextField source="name" />
                <RichTextField source="desc" />
                <BooleanField source="active" />
                <ReferenceField source="countryId" reference="countries" link="show">
                    <LinkField source="name" />
                </ReferenceField>
                <ReferenceField source="genreId" reference="genres" link="show">
                    <LinkField source="name" />
                </ReferenceField>
                <ReferenceArrayField source="albumsIds" reference="albums">
                    <SingleFieldList linkType="show">
                        <LinkField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <ImageField source="img" />
            </Tab>
            <Tab label="ranked" path="ranked">
                <DiscographySortField source="albumsIds" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

const BandEdit = props => (
    <Edit {...props}>
        <TabbedForm redirect="show">
            <FormTab label="summary">
                <TextInput source="id" disabled={true} />
                <TextInput source="name" />
                <TextInput source="desc" multiline />
                <BooleanInput source="active" />
                <ReferenceInput source="countryId" reference="countries" allowEmpty>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="genreId" reference="genres" allowEmpty>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceArrayInput source="albumsIds" reference="albums" allowEmpty>
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>
            </FormTab>
            <FormTab label="ranked" path="ranked">
                <DiscographySortInput source="albumsIds" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

const BandCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default {
    name: "bands",
    icon: MusicNoteIcon,
    list: BandList,
    show: BandShow,
    edit: BandEdit,
    create: BandCreate,
    hasJson: true
};
