import React, { useState } from 'react';
import { addField, translate } from 'ra-core';
import {
    TextInput, SelectInput, ReferenceInput, SimpleShowLayout, ReferenceArrayField,
    SingleFieldList, FunctionField, Datagrid, TextField
} from 'react-admin';
import get from 'lodash/get';
import { withStyles, createStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import { Badge } from '@material-ui/core';
import classNames from 'classnames';
import { ButtonHelper } from '../customs';
import { LinkField } from './';


const styles =
{
    fullwidth: {
        width: "100%",
    },
    elemStyle: {
        marginRight: "2rem"
    },
    flex: {
        display: "flex",
    },
    icon: {
        display: 'flex',
        alignItems: "center",
        marginRight: "1rem"
    },
    expanded: {
        transform: 'rotate(0deg)',
    },
    expandedPanel: {
        backgroundColor: '#eee',
        padding: '2rem',
        width: '90%',
        margin: 0,
    },
    left:
    {
        float: 'left',
    },
    referenceInput:
    {
        width: '20%',
    },
};


export const ExpanderBase = ({ source, input, record, index }) => 
{
    console.log(source,record,'yeye');
    const [expanded, setExpanded] = useState(false);

    const handleExpand = event =>
    {
        setExpanded(!expanded);
        event.stopPropagation();
    }

    const getSourceAndLabel = src =>
    ({
        source: `${src}`,
        label: `resources.bands.albumsIds`,
    });

    const createSpecificExpand = () =>
    {

        return <ReferenceArrayField source={source} reference="albums">
                <SingleFieldList>
                    <LinkField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
    }

    return createSpecificExpand();
}

