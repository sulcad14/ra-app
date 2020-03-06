import React from 'react';
import { addField } from 'ra-core';
import { 
    TextInput,
} from 'react-admin';
import Sortable from 'react-sortablejs';
import { withStyles, createStyles, Badge, Paper } from '@material-ui/core';
import { Reorder as ReorderIcon, TextRotationAngleup } from '@material-ui/icons';
import { ButtonHelper } from '../customs';
import get from 'lodash/get';
import { LinkField } from './';
// import dataProvider from '../providers/DataProvider';

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
    // const getAlbums = () => 
    // {
    //     const albums = dataProvider.getMany('albums', { ids: [items] });
    //     return albums;
    // }

    const handleChange = (order) =>
    {
        input.onChange(order.map(o => input.value[o]));
    };

    return <Paper className={classes.group}>
        <Sortable options={{ fallbackOnBody: true, group: "items", handle: reorderHandle }} tag="div" onChange={handleChange}>
            {Object.keys(items).map((item, index) => <Paper key={index} data-id={item} className={classes.item} elevation={0}>
                <ButtonHelper {...getHandleClass(editable)} icon={
                    <Badge badgeContent={index + 1} color="default">
                        {editable && <ReorderIcon />}
                    </Badge>}
                />   
                {editable &&
                    <TextInput source={`${source}[${item}]`} disabled={true} />
                } 
            </Paper>)}
        </Sortable>
    </Paper>;
};


const DiscographySortStyled = withStyles(styles)(({ classes, input, editable, record, source }) =>
{
    const items = editable ? (input.value || []) : get(record, source, []);
    return <ItemsReorder input={input} items={items} record={record} onChange={input && input.onChange} editable={editable} classes={classes} source={source} />;
});

export const DiscographySortField = props => <DiscographySortStyled {...props} editable={false} />;

export const DiscographySortInput = addField(props => <DiscographySortStyled {...props} editable={true} />);

    