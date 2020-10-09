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

import {
  Dialog,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  suggestionsContainerOpen: {
    zIndex: 2000,
  }
}));

export const PostEdit: FC<EditProps> = props => {
  const classes = useStyles();

  return (
    <Edit {...props}>
        <SimpleForm>
            <AutocompleteInput
              source="url555"
              choices={[
                  { id: 'programming', name: 'Programming' },
                  { id: 'lifestyle', name: 'Lifestyle' },
                  { id: 'photography', name: 'Photography' }
              ]}
              translateChoice={false}
            />

            <Dialog open>
              <AutocompleteInput
                source="url777"
                choices={[
                    { id: 'programming', name: 'Programming' },
                    { id: 'lifestyle', name: 'Lifestyle' },
                    { id: 'photography', name: 'Photography' }
                ]}
                classes={{
                  suggestionsContainer: classes.suggestionsContainerOpen,
                  suggestionsContainerOpen: classes.suggestionsContainerOpen,
                }}
              />
            </Dialog>

            <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
  );
};