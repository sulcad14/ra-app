import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import devConfig from '../devConfig';

const styles =
{
    appBarTheme: 
    {
        backgroundColor: devConfig.theme.primary
    },
    title:
    {
        flex: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    spacer:
    {
        flex: 1,
    },
};

export const MyAppBar = () =>
{
    return (
        <AppBar style={styles.appBarTheme}>
            <Typography
                color="inherit"
                style={styles.title}
                id="react-admin-title"
            />
            <span style={styles.spacer} />
        </AppBar>
    );
}
