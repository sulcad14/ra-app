import React from 'react';
import { Admin, Resource } from 'react-admin';
import * as Models from './models';
import FakeAPI from './providers/FakeAPI';
// import dataProvider from './providers/DataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard, CustomLayout, Localizator, NotFound } from './customs';
import devConfig from './devConfig';

const ResourceOrder = [
    Models.Bands,
    Models.Albums,
    Models.Genres,
    Models.Countries,
];

const localDataProvider = fakeDataProvider(FakeAPI);

const App = () => (
    <Admin 
        dataProvider={localDataProvider}
        // dataProvider={dataProvider}
        dashboard={Dashboard}
        layout={CustomLayout}
        i18nProvider={Localizator}
        catchAll={NotFound}
    >
        {ResourceOrder.map((res, index) => <Resource key={index} {...res} />)}
    </Admin>
);

export default App;