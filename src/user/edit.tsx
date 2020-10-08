import React, {FC} from "react";
import { Edit, SimpleForm, TextInput, EditProps } from 'react-admin';

export const UserEdit: FC<EditProps> = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="id" />
          <TextInput source="name" />
          <TextInput source="username" />
          <TextInput source="email" />
          <TextInput source="address.street" />
          <TextInput source="phone" />
          <TextInput source="website" />
          <TextInput source="company.name" />
      </SimpleForm>
  </Edit>
);