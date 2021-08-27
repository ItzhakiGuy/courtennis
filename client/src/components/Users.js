import * as React from "react";
import {Filter, TextInput, List, Datagrid, TextField, EmailField} from 'react-admin';
import {Show, NumberField, ArrayField, SimpleShowLayout, ShowButton} from 'react-admin';


export const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" resettable alwaysOn />
    </Filter>
);

export const UserList = (props) => (
    <List filters={React.createElement(UserFilter)} {...props} >
        <Datagrid>
            <TextField source="id"/>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <EmailField source="email"/>
            <ShowButton label="UserInfo"/>
        </Datagrid>
    </List>
);

export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <ArrayField source="loginActivity">
                <Datagrid label="Activity Log">
                    <TextField source="time" />
                <NumberField source="totalItemsPurchased" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);