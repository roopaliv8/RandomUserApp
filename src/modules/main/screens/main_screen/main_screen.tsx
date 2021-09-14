import React, { useEffect } from 'react';
import { Text, AppLayout } from '@core/components';
import { styles } from './main_screen.styles';
import { CardItems } from './components';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, loadUsers, loadDetial } from '@app/redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '..';
import { UserDataInterface } from '@app/redux/types/feed.types';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen({ }) {
  const navigation = useNavigation<authScreenProp>();
  const count=100

  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.feed)
  useEffect(() => {
    dispatch(loadUsers(count))
  }, []);
  if (posts?.results?.length === 0) {
    return (
      <AppLayout style={styles.noDataLayout}>
        <Text>No data</Text>
      </AppLayout>
    );
  }
  function toggleUnit(data: UserDataInterface): void {
    dispatch(loadDetial(data))
    navigation.navigate('Details', { email: data.email });
  }

  return (
    <AppLayout>
      <FlatList<UserDataInterface>
        keyExtractor={(_item) => _item.email}
        renderItem={({ item }) => <CardItems data={item}
          toggleUnit={toggleUnit} />}
        data={posts?.results}
      />
    </AppLayout>
  );
};
