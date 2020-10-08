import React, {FC} from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  EditProps,
} from 'react-admin';

export const PostEdit: FC<EditProps> = props => (
  <Edit {...props}>
      <SimpleForm>
          <AutocompleteInput
            // label="url4"
            source="url555"
            choices={[
                { id: 'programming', name: 'Programming' },
                { id: 'lifestyle', name: 'Lifestyle' },
                { id: 'photography', name: 'Photography' }
            ]}
            // translateChoice={false}
            // options={{
            //     suggestionsContainerProps: {
            //         zIndex: 2000
            //     }
            // }}
          />

          <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
          </ReferenceInput>
          <TextInput source="id" />
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>
  </Edit>
);