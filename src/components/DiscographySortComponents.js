import React from 'react';
import { addField } from 'ra-core';
import { 
    TextInput, TextField, FunctionField, SimpleShowLayout
} from 'react-admin';
import Sortable from 'react-sortablejs';
import { withStyles, createStyles, Badge, Paper } from '@material-ui/core';
import { Reorder as ReorderIcon, TextRotationAngleup } from '@material-ui/icons';
import { ButtonHelper } from '../customs';
import get from 'lodash/get';
import { LinkField, ImageList, AlbumRatingField } from './';

const styles = theme => createStyles(
{
    fullwidth:
    {
        width: "100%",
    },
    item:
    {
        backgroundColor: theme.palette.grey[300],
        margin: "5px",
        width: "70%",
        marginTop: "30px"
    },
    right:
    {
        float: "right",
    },
    group:
    {
        backgroundColor: theme.palette.grey[200],
        padding: "5px",
        margin: "15px",
        width: "500px",
    },
    gridItem:
    {
        padding: "10px",
        width: '365px'
    },
    textField:
    {
        marginLeft: '20px',
        marginTop: '-45px'
    }
});

const reorderHandle = ".reorderHandle";

const getHandleClass = editable => editable ? { className: "reorderHandle" } : {};

const ItemsReorder = ({ items, editable, classes, source, input, record }) =>
{
    const handleChange = (order) =>
    {
        input.onChange(order.map(o => input.value[o]));
    };

    return <Paper className={classes.group}>
        <SimpleShowLayout record={record}>
            <ImageList source={record.img} addLabel={true} label="resources.albums.fields.img" />
            <FunctionField label="resources.albums.fields.name" source={record.name} render={record => `${record.name}`} />
            <AlbumRatingField source={record.rating} addLabel={true} label="resources.albums.fields.rating" />
            <br></br>
        </SimpleShowLayout>
    </Paper>;
};


const DiscographySortStyled = withStyles(styles)(({ classes, input, editable, record, source }) =>
{
    const items = record; 
    return <ItemsReorder input={input} items={items} record={record} onChange={input && input.onChange} editable={editable} classes={classes} source={source} />;
});

export const DiscographySortField = props => <DiscographySortStyled {...props} editable={false} />;

export const DiscographySortInput = addField(props => <DiscographySortStyled {...props} editable={true} />);

    