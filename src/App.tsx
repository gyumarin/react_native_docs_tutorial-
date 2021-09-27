import React, {useState, useCallback, useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import Contacts, {addContact, Contact} from 'react-native-contacts';
import {Container, Text, ViewItem} from './AppStyle';
import ContactList from './Contacts';

type ContactList = Array<Contact>;

const App = () => {
  const [contactList, setContactList] = useState<ContactList>([]);
  //-----연락처 권한 부분 ------

  const getContacts = () => {
    requestContactPermisson().then(didGetPermission => {
      if (didGetPermission) {
        console.log('...yes');
        console.log(
          Contacts.getAll().then(contacts => {
            setContactList(contacts);
            // console.log(contacts);
          }),
        );
      } else {
        console.log('...no');
      }
    });
  };

  const addContacts = () => {
    requestContactPermisson().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          emailAddresses: [
            {
              label: 'work',
              email: 'mrniet@example.com',
            },
          ],
          familyName: '박',
          givenName: '규민',
          phoneNumbers: [
            {
              label: 'mobile',
              number: '010-1111-1111',
            },
          ],
        };

        Contacts.addContact(newContact);
      }
    });
  };

  const deleteContacts = (contact: Contact) => {
    Contacts.deleteContact(contact).then(recordId => {
      console.log(recordId);
    });
  };

  //-----연락처 권한 부분 ------

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <Container>
      <ContactList contactList={contactList} deleteContacts={deleteContacts} />
      <ViewItem onPress={addContacts}>
        <Text>추가</Text>
      </ViewItem>
    </Container>
  );
};

export default App;

const requestContactPermisson = async () => {
  if (Platform.OS === 'ios') {
    console.log('ios');
    return true;
  } else {
    console.warn('Android');

    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    ]);

    if (
      granted['android.permission.WRITE_CONTACTS'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.READ_CONTACTS'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      return true;
    } else {
      return false;
    }
  }
};
