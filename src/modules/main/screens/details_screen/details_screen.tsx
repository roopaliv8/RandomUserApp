import React, { useEffect } from 'react';
import { AppLayout } from '@core/components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '@app/redux/reducers';
import { CardItems } from './components/details_view';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
export default function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const data = useSelector((state: RootState) => state.details)
  useEffect(() => {
  }, []);
  return (
    <AppLayout>
      <CardItems
        data={data.details}
      />
    </AppLayout>
  );
};
