import React, { useEffect } from 'react';
import { Text, AppLayout } from '@core/components';
import { styles } from './main_screen.styles';
import { CardItems, ViewMoreItems } from './components';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, saveData } from '@app/redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '..';
import { UserDataInterface } from '@app/redux/types/feed.types';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen ({ }) {
  const navigation = useNavigation<authScreenProp>();

  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.feed)
  console.log(posts.results)
  const items = posts.results.slice(0, 5)
  useEffect(() => {
    dispatch(saveData())
  }, []);
  if (posts.results.length === 0) {
    return (
      <AppLayout style={styles.noDataLayout}>
        <Text>No data</Text>
      </AppLayout>
    );
  }
  const toggleUnit = (): void => {
    navigation.navigate('Details')
  };

  return (
    <AppLayout>
      <FlatList<UserDataInterface>
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => <CardItems data={item} />}
        data={items}
      />
      <ViewMoreItems
        toggleUnit={toggleUnit} />
    </AppLayout>
  );
};
