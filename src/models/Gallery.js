import React from 'react';
import
{
    List, Show, Edit, Filter, Create, Datagrid, SimpleShowLayout, 
    SimpleForm, TextInput, TextField, ImageField, ImageInput
} from 'react-admin';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { Actions } from '../customs/Actions';

const GalleryFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" alwaysOn />
    </Filter>
);

const GalleryList = props => (
    <List filters={<GalleryFilter />} actions={<Actions />} sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
        </Datagrid>
    </List>
);

const GalleryShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <ImageField source="image" />
        </SimpleShowLayout>
    </Show>
);

const GalleryEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput source="id" disabled={true} />
            <TextInput source="name" />
            <ImageInput source="image" accept="image/*">
                <ImageField source="src" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

const GalleryCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="edit">
            <TextInput source="name" />
            <ImageInput source="image" accept="image/*">
                <ImageField source="src" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export default {
    name: "gallery",
    icon: PhotoCameraIcon,
    list: GalleryList,
    show: GalleryShow,
    edit: GalleryEdit,
    create: GalleryCreate
};
