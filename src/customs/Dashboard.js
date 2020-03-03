import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import devConfig from '../devConfig';

const styles = 
{
    card:
    {
        marginTop: '50px'
    },
    cardText: 
    {
        fontSize: '20px',
        fontFamily: "Helvetica",
    },
    cardTextSide: 
    {
        fontSize: '14px',
        fontFamily: "Helvetica",
    }
}

export const Dashboard = () =>
{
    return (
        <Card style={styles.card}>
            <Title title={devConfig.name} />
            <CardContent>
                <div style={styles.cardText}>
                    Music Project DEV
                </div>
                <div style={styles.cardTextSide}>
                    Current Version: {devConfig.version}
                    <br></br>
                    So far only local API using 'ra-data-fakerest'
                </div>
            </CardContent>
        </Card>
    )
}