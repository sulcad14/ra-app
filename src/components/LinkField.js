import React from 'react';
import { ChipField } from 'react-admin';
import devConfig from '../devConfig';

const styles = 
{
    chipColor: 
    {
        backgroundColor: devConfig.theme.primary
    }
}

export const LinkField = ({ record, source }) => 
{
    return record ? 
        <ChipField style={styles.chipColor} record={record} source={source} color="primary" />
        : <ChipField record={{ [source]: "Empty"}} source={source} style={styles.chipColor} />;
};
