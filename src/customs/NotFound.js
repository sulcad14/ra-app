import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export const NotFound = () => (
    <Card>
        <Title title="custom.notFound" />
        <CardContent>
            <h1>404: Page not found, check the URL</h1>
        </CardContent>
    </Card>
);