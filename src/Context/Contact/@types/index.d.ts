import {Contact as CT} from 'react-native-contacts';

interface IContact extends CT {}

interface IContactContext {
  selectedContact: IContact;
  contactList: IContact[] | null;
  getContacts: () => void;
  addContacts: (contact: IContact) => void;
  deleteContacts: (contact: IContact) => void;
  updateContacts: (contact: IContact) => void;
  selectContact: (contact: IContact) => void;
}
