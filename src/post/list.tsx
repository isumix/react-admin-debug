import React, {FC} from "react";
import { List, Datagrid, TextField, ReferenceField, ListProps } from 'react-admin';

export const PostList: FC<ListProps> = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
      </Datagrid>
  </List>
);