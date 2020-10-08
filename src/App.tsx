import React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {UserList} from './user/list';
import {UserEdit} from './user/edit';

import {PostList} from './post/list';
import {PostEdit} from './post/edit';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} />
        <Resource name="users" list={UserList} edit={UserEdit} />
    </Admin>
);

export default App;