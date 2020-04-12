import React from 'react';
import { addField } from 'ra-core';
import { TextInput, TextField, Datagrid, ReferenceField, Filter } from 'react-admin';
import Sortable from 'react-sortablejs';
import { withStyles, createStyles, Badge, Paper } from '@material-ui/core';
import { Reorder as ReorderIcon, AddCircle as AddIcon, RemoveCircle as RemoveIcon } from '@material-ui/icons';
import { ButtonHelper } from '../customs';
import get from 'lodash/get';

const styles = theme => createStyles(
{
    fullwidth:
    {
        width: "100%",
    },
    group:
    {
        backgroundColor: '#eeeeee',
        padding: "5px",
        width: "500px",
    },
    item:
    {
        backgroundColor: '#e0e0e0',
        margin: "5px",
    },
    right:
    {
        float: "right",
    },
    text:
    {
        marginRight: "10px",
    },
});

const reorderHandle = ".reorderHandle";

const getHandleClass = editable => editable ? { className: "reorderHandle" } : {};

const ItemsReorder = ({ items, editable, classes, onChange }) =>
{
    const handleChange = (order) =>
    {
        onChange(order);
    };

    const AlbumText = ({ record: { name, rating }, className }) =>
    (
        <span className={className}>
            {name ? name : null}
        </span>
    );

    return <Paper className={classes.group}>
        <Sortable options={{ fallbackOnBody: true, group: "items", handle: reorderHandle }} tag="div" onChange={handleChange}>
            {items.map((item, index) => <Paper key={index} data-id={item} className={classes.item} elevation={0}>
                <ButtonHelper {...getHandleClass(editable)} icon={
                    <Badge badgeContent={index + 1} color="default">
                        {editable && <ReorderIcon />}
                    </Badge>}
                />
                <ReferenceField basePath="/albums" source="albumsIds" record={{ albumsIds: item }} reference="albums" link="show">
                    <AlbumText className={classes.text} />
                </ReferenceField>
            </Paper>)}
        </Sortable>
    </Paper>;
};


const DiscographySortStyled = withStyles(styles)(({ classes, input, editable, record, source }) => {

    const items = editable ? (input.value || []) : get(record, source, []);
    return <ItemsReorder items={items} onChange={input && input.onChange} editable={editable} classes={classes} />;

});

export const DiscographySortField = props => <DiscographySortStyled {...props} editable={false} />;

export const DiscographySortInput = addField(props => <DiscographySortStyled {...props} editable={true} />);
