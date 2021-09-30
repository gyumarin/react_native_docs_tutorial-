import React, {createContext, useEffect, useState} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import {IContact, IContactContext} from './@types';

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

const defaultContext: IContactContext = {
  selectedContact: {
    recordID: '',
    familyName: '',
    givenName: '',
    phoneNumbers: [
      {
        label: '',
        number: '',
      },
    ],
    emailAddresses: [
      {
        label: '',
        email: '',
      },
    ],
  },
  contactList: [],
  getContacts: () => {},
  addContacts: (contact: IContact | IContact) => {},
  deleteContacts: (contact: IContact) => {},
  updateContacts: (contact: IContact) => {},
  selectContact: (contact: IContact) => {},
};

const ContactContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const ContactContextProvider = ({children}: Props) => {
  const [contactList, setContactList] = useState<IContact[] | null>([]);
  const [selectedContact, setSelectedContact] = useState<IContact>(
    defaultContext.selectedContact,
  );

  useEffect(() => {
    getContacts();
  }, []);

  //-----연락처 권한 부분 ------

  const selectContact = (contact: IContact) => {
    setSelectedContact(contact);
  };

  const getContacts = () => {
    requestContactPermisson().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll().then(contacts => {
          setContactList(contacts);
        });
      } else {
        console.error('No Permisson');
      }
    });
  };

  const addContacts = (contact: IContact | IContact) => {
    requestContactPermisson().then(didGetPermission => {
      const {recordID, emailAddresses, familyName, givenName, phoneNumbers} =
        contact;
      const [{email}] = emailAddresses;
      const [{number}] = phoneNumbers;

      if (didGetPermission) {
        const newContact = {
          recordID: '',
          emailAddresses: [
            {
              label: 'email',
              email: email,
            },
          ],
          familyName: familyName,
          givenName: givenName,
          phoneNumbers: [
            {
              label: 'mobile',
              number: number,
            },
          ],
        };

        Contacts.addContact(newContact);
      } else {
        console.error('No Permisson');
      }
    });
  };

  const deleteContacts = (contact: IContact) => {
    Contacts.deleteContact(contact).then(contact => {
      console.log(contact);
    });
    getContacts();
  };

  const updateContacts = (contact: IContact) => {
    Contacts.updateContact(contact).then(contact => {
      console.log(contact);
    });
    getContacts();
  };

  //-----연락처 권한 부분 ------
  return (
    <ContactContext.Provider
      value={{
        updateContacts,
        addContacts,
        deleteContacts,
        getContacts,
        selectContact,
        contactList,
        selectedContact,
      }}>
      {children}
    </ContactContext.Provider>
  );
};

export {ContactContextProvider, ContactContext};
