import React, {FC} from "react";
import { List, Datagrid, TextField, EmailField, EditButton, ListProps } from 'react-admin';

export const UserList: FC<ListProps> = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          {/* <TextField source="address.street" />
          <TextField source="phone" />
          <TextField source="website" />
          <TextField source="company.name" /> */}
          <EditButton />
      </Datagrid>
  </List>
);