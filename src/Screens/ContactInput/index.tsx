import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ContactContext} from '~/Context/Contact';
import {IContact} from '~/Context/Contact/@types';

interface Props {
  navigation: any;
  route: any;
}

const ContactInput = ({navigation, route}: Props) => {
  const {selectedContact, addContacts, getContacts, updateContacts} =
    useContext(ContactContext);

  //만약 route.name이 ADD면 초기화, 아니면 selectedContact값을
  const [contact, setContact] = useState<IContact>(
    route.name === 'ADD'
      ? {
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
        }
      : selectedContact,
  );

  const onChangeValue = (value: any, id: any) => {
    if (id === 'email') {
      setContact({
        ...contact,
        emailAddresses: [
          {
            ...contact.emailAddresses[0],
            email: value,
          },
        ],
      });
    } else if (id === 'phone') {
      setContact({
        ...contact,
        phoneNumbers: [
          {
            ...contact.phoneNumbers[0],
            number: value,
          },
        ],
      });
    } else {
      setContact({
        ...contact,
        [id]: value,
      });
    }
  };

  const onPressEvent = () => {
    if (route.name === 'ADD') {
      addContacts(contact);
    } else {
      updateContacts(contact);
    }

    getContacts();
    navigation.navigate('HOME');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.inputfont}>Family Name:</Text>
        <TextInput
          defaultValue={contact.familyName}
          onChangeText={text => onChangeValue(text, 'familyName')}
          placeholder="useless placeholder"
          // keyboardType="numeric"
          style={styles.inputBox}
        />
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.inputfont}>Given Name:</Text>
        <TextInput
          defaultValue={contact.givenName}
          onChangeText={text => onChangeValue(text, 'givenName')}
          placeholder="useless placeholder"
          // keyboardType="numeric"
          style={styles.inputBox}
        />
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.inputfont}>phone:</Text>
        <TextInput
          defaultValue={contact.phoneNumbers[0].number}
          onChangeText={text => onChangeValue(text, 'phone')}
          placeholder="useless placeholder"
          // keyboardType="numeric"
          style={styles.inputBox}
        />
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.inputfont}>email:</Text>
        <TextInput
          defaultValue={contact.emailAddresses[0].email}
          onChangeText={text => onChangeValue(text, 'email')}
          placeholder="useless placeholder"
          // keyboardType="numeric"
          style={styles.inputBox}
        />
      </View>
      <View style={styles.under}>
        <TouchableOpacity style={styles.button} onPress={onPressEvent}>
          <Text style={styles.buttonText}>
            {route.name === 'ADD' ? '추가하기' : '수정하기'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    flex: 3,
    // backgroundColor: 'red',
    height: 200,
    paddingBottom: 300,
  },
  contentBox: {
    alignItems: 'center',
    flex: 0.25,
    // backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  inputBox: {
    flex: 6,
    // width: 200,
    fontSize: 20,
    borderWidth: 1,
    paddingLeft: 5,
  },
  inputfont: {
    flex: 3.5,
    fontSize: 20,
  },
  under: {
    // backgroundColor: 'blue',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    flex: 0.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#c8eef5',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default ContactInput;
