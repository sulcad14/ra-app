import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import devConfig from '../devConfig';
import ReactPlayer from 'react-player';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { style } from '@material-ui/system';

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
        marginBottom: '10px'
    },
    cardTextSide: 
    {
        fontSize: '14px',
        fontFamily: "Helvetica",
    },
    newsCard: 
    {
        marginTop: '50px',
        height: '400px',
        width: '100%'
    },
    chipColor: 
    {
        backgroundColor: devConfig.theme.primary
    }
}

export const Dashboard = () =>
{
    const url = "https://www.youtube.com/watch?v=c4iyEXDStgk";

    const url2 = "https://www.youtube.com/watch?v=tAv5Rxpl_UY";

    const getCurrentUrl = () => 
    {
        const currentUrl = window.location.href + 'bands/3/show';
        return currentUrl;
    }

    const getCurrentUrl2 = () => 
    {
        const currentUrl = window.location.href + 'bands/6/show';
        return currentUrl;
    }

    return (
        <div>
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
            <Card style={styles.newsCard}>
                <CardContent>
                    <div style={styles.cardText}>
                        Coming Soon:
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <div style={styles.cardTextSide}>
                                Use Me by <Chip
                                    label="PVRIS"
                                    clickable
                                    color="primary"
                                    component="a" 
                                    href={getCurrentUrl()}
                                    style={styles.chipColor}
                                /> out May 1
                                <hr></hr>
                                <ReactPlayer url={url} controls={true} width="444px" height="250px"/>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={styles.cardTextSide}>
                                Like a House on Fire by <Chip
                                    label="Asking Alexandria"
                                    clickable
                                    color="primary"
                                    component="a" 
                                    href={getCurrentUrl2()}
                                    style={styles.chipColor}
                                /> out May 15
                                <hr></hr>
                                <ReactPlayer url={url2} controls={true} width="444px" height="250px"/>
                            </div>
                        </Grid>
                    </Grid>    
                </CardContent>
            </Card>
        </div>
    )
}