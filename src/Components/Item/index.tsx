import styled from 'styled-components/native';
import React, {useContext} from 'react';
import {ContactContext} from '~/Context/Contact';

const Item = ({contact, navigation}: any) => {
  const {deleteContacts, selectContact} = useContext(ContactContext);
  const {recordID, emailAddresses, familyName, givenName, phoneNumbers} =
    contact;
  const [{email}] = emailAddresses;
  const [{number}] = phoneNumbers;

  const onPressContact = () => {
    navigation.navigate('UPDATE');
    selectContact(contact);
  };

  return (
    <ItemContainer onPress={onPressContact}>
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

export default Item;

const ItemContainer = styled.TouchableOpacity`
  background-color: #f2f2b3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  padding: 5px 15px;
  margin: 10px 10px;
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

const DeleteButton = styled.TouchableOpacity`
  font-size: 24px;
  background-color: #f2b3de;
`;

const TextView = styled.View``;
