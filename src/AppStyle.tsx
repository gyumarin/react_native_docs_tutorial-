import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  padding: 20px;
`;

export const Middle = styled.View`
  border-width: 2px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex: 0.1;
`;

export const Bottom = styled.View`
  border-width: 2px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex: 0.5;
`;

export const ScrollView = styled.ScrollView`
  border: 1px;
  flex: 1;
`;

export const ScrollViewText = styled.Text`
  text-align: center;
  font-size: 20px;
`;

export const FlatList = styled.FlatList`
  flex: 1;
`;
export const ImageBg = styled.ImageBackground`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

export const WhoText = styled.Text`
  font-size: 30px;
  line-height: 80px;
  text-align: center;
  background-color: ${Platform.OS === 'ios' ? '#e1e1e1ab' : '#45ce3ecb'};
  color: ${Platform.OS === 'ios' ? '#111111' : '#ffffff'};
  font-weight: bold;
  width: 90%;
`;

export const Text = styled.Text`
  text-align: center;
  line-height: ${Platform.OS === 'ios' ? '70px' : '60px'};
`;

export const ViewItem = styled.TouchableOpacity`
  border: 1px;
  width: 90%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 10%;
`;

export const Pressable = styled.Pressable``;
