import React, {useState, useCallback} from 'react';
import {Platform, ActivityIndicator, View, RefreshControl} from 'react-native';
import {
  Container,
  ImageBg,
  WhoText,
  Middle,
  Text,
  Bottom,
  ScrollView,
  ScrollViewText,
  FlatList,
  ViewItem,
  Pressable,
} from './AppStyle';

const ITEM_HEIGHT = 2;

const wait = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const image = {uri: 'https://reactjs.org/logo-og.png'};
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <Container>
      <ImageBg source={image} style={{resizeMode: 'cover'}}>
        <WhoText>{ByOS('I AM IOS', ' I AM ANDROID')}</WhoText>
      </ImageBg>
      <Middle>
        <Text>scrollView ------------ </Text>
        <ActivityIndicator
          size="large"
          color={ByOS('#e1e1e1ab', '#45ce3ecb')}
        />
        <Text> ------------ flatList</Text>
      </Middle>
      <Bottom>
        <ScrollView
          onScrollEndDrag={() => {
            console.log('멈춘다으아아');
          }}
          onScrollBeginDrag={() => {
            console.log('시작한다!');
          }}
          scrollsToTop={true}>
          <ScrollViewText>
            사용자가 손가락을 뗀 후 스크롤 뷰가 얼마나 빨리 감속되는지를 하는
            부동 소수점 숫자입니다. 또한 문자열 바로 가기를 사용할 수 있습니다
            "normal"및 "fast"있는 일치 기본 아이폰 OS 설정을
            UIScrollViewDecelerationRateNormal하
            IScrollViewDecelerationRateFast각각. 사용자가 손가락을 뗀 후 스크롤
            뷰가 얼마나 빨리 감속되는지를 하는 부동 소수점 숫자입니다. 또한
            문자열 바로 가기를 사용할 수 있습니다 "normal"및 "fast"있는 일치
            기본 아이폰 OS 설정을 UIScrollViewDecelerationRateNormal하
            IScrollViewDecelerationRateFast각각. 사용자가 손가락을 뗀 후 스크롤
            뷰가 얼마나 빨리 감속되는지를 하는 부동 소수점 숫자입니다. 또한
            문자열 바로 가기를 사용할 수 있습니다 "normal"및 "fast"있는 일치
            기본 아이폰 OS 설정을 UIScrollViewDecelerationRateNormal하
            IScrollViewDecelerationRateFast각각. 사용자가 손가락을 뗀 후 스크롤
            뷰가 얼마나 빨리 감속되는지를 하는 부동 소수점 숫자입니다. 또한
            문자열 바로 가기를 사용할 수 있습니다 "normal"및 "fast"있는 일치
            기본 아이폰 OS 설정을 UIScrollViewDecelerationRateNormal하
            IScrollViewDecelerationRateFast각각. 사용자가 손가락을 뗀 후 스크롤
            뷰가 얼마나 빨리 감속되는지를 하는 부동 소수점 숫자입니다. 또한
            문자열 바로 가기를 사용할 수 있습니다 "normal"및 "fast"있는 일치
            기본 아이폰 OS 설정을 UIScrollViewDecelerationRateNormal하
            IScrollViewDecelerationRateFast각각.
          </ScrollViewText>
        </ScrollView>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressBackgroundColor={ByOS('#e1e1e1ab', '#45ce3ecb')}
              title="새로 고침 됩니다."
            />
          }
          // horizontal={true}
          // pagingEnabled={true}
          data={DATA2} //♦︎필수 뿌릴 데이터 배열
          keyExtractor={item => (item as DataType).id}
          //as는 dataType을 강제로 변환한다. 주로 FlatList에서 애용되는 듯 하다...?
          renderItem={({item, index}) => <RenderItem item={item as DataType} />} //♦︎ 필수 data를 가지고 뿌리는 함수
          // ListEmptyComponent={<Text>null</Text>}
          // ItemSeparatorComponent={Between} //각 item들 사이에 뿌려지는 컴포넌트
          initialNumToRender={1}
        />
      </Bottom>
    </Container>
  );
};

export default App;

const Between = () => (
  <View>
    <Text>-------------</Text>
  </View>
);

interface Props {
  item: DataType;
}

const RenderItem = ({item}: Props) => {
  return (
    <ViewItem>
      <Pressable
      // onPress={() => {
      //   console.log('눌렀어요');
      // }}
      // onLongPress={() => {
      //   console.log('길게 눌렀어요');
      // }}
      // onPressIn={() => {
      //   console.log('누르기 시작');
      // }}
      // onPressOut={() => {
      //   console.log('누르기 끝');
      // }}
      >
        <Text>{item.title}</Text>
      </Pressable>
    </ViewItem>
  );
};

const ByOS = (iosValue: string, androidValue: string) => {
  const result = Platform.OS === 'ios' ? iosValue : androidValue;
  return result;
};

const DATA1 = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const DATA2: DataType[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    desc: '',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-sadasdsd',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-asdasssssd',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-sdfsdf',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-dasdasd',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-asdasdas',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-sadsfsaf',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-asdsadsadasd',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-ssds',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-asdasd',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-xzvxv',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-cvbcvb',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-hfghfg',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-vnvn',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-fdfsd',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-qweq24',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-b cvbthre',
    title: 'Third Item',
  },
];

interface DataType {
  id: string;
  title: string;
  desc?: string;
}
