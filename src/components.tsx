import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Dialog from 'react-native-dialog';

export const HomeScreen = ({route, navigation}: any) => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (route.params?.post) {
      console.log('updated');
    }
  }, [route.params?.post]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setCount(c => c + 1)}
          title="Update count"
          color="#fff"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.Container}>
      <Text>Home : {count}</Text>

      <Button
        title="Go to Details.. again"
        onPress={() =>
          navigation.push('Detail', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      {/* 이동할 스크린에서 값 받아 오기 */}
      <Button
        title="Create Post"
        onPress={() => {
          navigation.navigate('CreatePost');
        }}
      />
      {/* 이동할 헤더 타이틀 이름  */}
      <Button
        title="Go Profile"
        onPress={() => {
          navigation.navigate('Profile', {name: 'Home에서 넘어온 header 이름'});
        }}
      />
      {/* 현재 헤더 타이틀 변경 */}
      <Button
        title="Update the title"
        onPress={async () => {
          await setToggle(true);
        }}
      />

      <Text style={{margin: 10}}> Post : {route.params?.post}</Text>
      <View>
        <Dialog.Container visible={toggle}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Input value={text} onChangeText={setText} />
          <Dialog.Button
            label="OK"
            onPress={() => {
              setToggle(false);
              navigation.setOptions({title: text});
            }}
          />
        </Dialog.Container>
      </View>
    </View>
  );
};
export const DetailScreen = ({route, navigation}: any) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={styles.Container}>
      <Text>Detail</Text>
      <Text>itemId : {itemId}</Text>
      <Text>otherParam : {otherParam}</Text>
      <Button
        title="Go to Details.. again"
        onPress={() =>
          navigation.push('Detail', {
            itemId: Math.floor(Math.random() * 100),
            otherParam: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export const CreatePostScreen = ({navigation, route}: any) => {
  const [postText, setPostText] = useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.InputBox}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Home', {post: postText});
        }}
      />
    </>
  );
};

export const ProfileScreen = ({navigation, route}: any) => {
  return (
    <View style={styles.Container}>
      <Text>Profile screen</Text>
      <Button title="GO Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export const LogTitle = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.Header}>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      {/* <TextInput style={styles.InputBox2} value={text} onChangeText={setText} />
        <Button
          title="검색"
          onPress={() => {
            setText('');
          }}
        /> */}
    </View>
  );
};

export const Home = () => {
  return (
    <View style={styles.Container}>
      <Text>Home</Text>
    </View>
  );
};
export const Profile = ({route, navigation}: any) => {
  return (
    <View style={styles.Container}>
      <Text>Profile</Text>
      <Button
        title="Go Root"
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'King',
            initial: false,
            params: {count: 1},
          });
        }}
      />
    </View>
  );
};
export const Settings = () => {
  return (
    <View style={styles.Container}>
      <Text>Settings</Text>
    </View>
  );
};
export const Feed = () => {
  return (
    <View style={styles.Container}>
      <Text>Feed </Text>
    </View>
  );
};
export const Messages = () => {
  return (
    <View style={styles.Container}>
      <Text>Messages </Text>
    </View>
  );
};
export const King = ({route, navigation}: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (route.params) {
      setCount(count + route.params.count);
    }
    return () => {
      console.log('byKing');
    };
  }, []);
  return (
    <View style={styles.Container}>
      <Text>King </Text>
      <Text>count : {count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {},
  Header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputBox: {
    height: 200,
    padding: 10,
    backgroundColor: 'white',
  },
  InputBox2: {
    marginHorizontal: 10,
    width: 250,
    height: 40,
    padding: 10,
    backgroundColor: 'white',
  },
});
