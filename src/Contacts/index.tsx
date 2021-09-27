import React, {useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Contact} from 'react-native-contacts';
import styled from 'styled-components/native';

interface Props {
  contactList: Contact[];
  deleteContacts: (contact: Contact) => void;
}

interface Props2 {
  contact: Contact;
  deleteContacts: (contact: Contact) => void;
}

const ContactList = ({contactList, deleteContacts}: Props) => {
  useEffect(() => {}, [contactList]);

  return (
    <View>
      {contactList.map((contact, index) => (
        <Item contact={contact} key={index} deleteContacts={deleteContacts} />
      ))}
    </View>
  );
};

export default ContactList;

const Item = ({contact, deleteContacts}: any) => {
  const {recordID, emailAddresses, familyName, givenName, phoneNumbers} =
    contact;
  const [{email}] = emailAddresses;
  const [{number}] = phoneNumbers;
  return (
    <ItemContainer>
      <TextView>
        <Font_1>
          이름 : {familyName} {givenName}
        </Font_1>
        <Font_1>phone : {number}</Font_1>
        <Font_1>email : {email}</Font_1>
      </TextView>
      <DeleteButton onPress={() => deleteContacts(contact)}>
        <Font_2>삭제</Font_2>
      </DeleteButton>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  padding: 5px 15px;
  margin-top: 10px;
  border-radius: 10px;
`;

const Font_1 = styled.Text`
  font-size: 16px;
`;

const Font_2 = styled.Text`
  font-size: 18px;
  font-weight: bold;
  border: 1px;
  padding: 10px 15px;
`;

const Font_3 = styled.Text`
  font-size: 9px;
`;

const DeleteButton = styled.TouchableOpacity`
  font-size: 24px;
`;

const TextView = styled.View``;
