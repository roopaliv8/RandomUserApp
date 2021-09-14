import React from 'react';
import { Text, View, Card, TouchableOpacity } from '@core/components';
import { styles } from './card_item.styles';
import { UserDataInterface, UserInterface } from '@app/redux/types';


interface Props {
  data: UserDataInterface;
}

export const CardItems = (props: Props): JSX.Element => {
  const { data } = props;
  return (
    <View style={styles.layout}>

      <Card style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.bold} category='h6'>{`${data.name.title +" "+data.name.first+" "+data.name.last}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold} category='h6'>{`${data.gender}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold} category='h6'>{`${data.email}`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold} category='h6'>{`${data.picture.thumbnail}`}</Text>
        </View>
      </Card>
    </View>
  );
};
