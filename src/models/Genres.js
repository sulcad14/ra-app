import React from 'react';
import
{
    List, Show, Edit, Filter, Create, Datagrid, SimpleShowLayout, 
    SimpleForm, TextInput, TextField, RichTextField, SingleFieldList, 
    ReferenceArrayField, ReferenceArrayInput, SelectArrayInput
} from 'react-admin';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { Actions } from '../customs/Actions';
import RichTextInput from 'ra-input-rich-text';
import { LinkField } from '../components';

const GenreFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" alwaysOn />
    </Filter>
);

const GenreList = props => (
    <List filters={<GenreFilter />} actions={<Actions />} sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
        </Datagrid>
    </List>
);

const GenreShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <RichTextField source="desc" />
            <ReferenceArrayField source="bandsIds" reference="bands">
                <SingleFieldList linkType="show">
                    <LinkField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show>
);

const GenreEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput source="id" disabled={true} />
            <TextInput source="name" />
            <RichTextInput source="desc" />
            <ReferenceArrayInput source="bandsIds" reference="bands" allowEmpty>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

const GenreCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default {
    name: "genres",
    icon: LibraryMusicIcon,
    list: GenreList,
    show: GenreShow,
    edit: GenreEdit,
    create: GenreCreate
};
