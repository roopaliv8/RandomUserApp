import React, { useEffect } from 'react';
import { AppLayout } from '@core/components';
import { ViewMoreItems } from './components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '..';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

export default function MainScreen ({ }) {
  const navigation = useNavigation<authScreenProp>();
  useEffect(() => {
  }, []);
  const toggleUnit = (): void => {
    navigation.navigate('Details')
  };

  return (
    <AppLayout>
     
      <ViewMoreItems
        toggleUnit={toggleUnit} />
    </AppLayout>
  );
};
