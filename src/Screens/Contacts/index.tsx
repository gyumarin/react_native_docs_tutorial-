import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Item from '~/Components/Item';
import {ContactContext} from '~/Context/Contact';
import {IContactContext} from '~/Context/Contact/@types';
import {Picker} from '@react-native-picker/picker';

interface Props {
  navigation: any;
}

const Contacts = ({navigation}: Props) => {
  const {contactList} = useContext<IContactContext>(ContactContext);
  const [selectedLanguage, setSelectedLanguage] = useState(0);

  useEffect(() => {
    console.log(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Text1}>연락처 리스트</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={contactList}
          renderItem={({item, index}) => (
            <Item contact={item} key={index} navigation={navigation} />
          )}
        />
      </View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="0" />
        <Picker.Item label="JavaScript" value="1" />
        <Picker.Item label="C++" value="2" />
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ADD')}>
        <Text style={styles.Text2}>추가하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    paddingTop: -30,
    flex: 1,
  },
  list: {
    flex: 7,
    marginBottom: 10,
  },
  button: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#c8eef5',
  },
  Text1: {
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  Text2: {
    fontSize: 24,
  },
});
