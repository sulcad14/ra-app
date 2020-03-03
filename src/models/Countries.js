import React from 'react';
import
{
    List, Show, Edit, Filter, Create, Datagrid, SimpleShowLayout, 
    SimpleForm, TextInput, TextField,
} from 'react-admin';
import FlagIcon from '@material-ui/icons/Flag';
import { Actions } from '../customs/Actions';

const CountyFilter = (props) => (
    <Filter {...props}>
        <TextInput source="name" alwaysOn />
    </Filter>
);

const CountyList = props => (
    <List filters={<CountyFilter />} actions={<Actions />} sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid rowClick="show">
            <TextField source="name" />
        </Datagrid>
    </List>
);

const CountryShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

const CountryEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput source="id" disabled={true} />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

const CountryCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export default {
    name: "countries",
    icon: FlagIcon,
    list: CountyList,
    show: CountryShow,
    edit: CountryEdit,
    create: CountryCreate
};
