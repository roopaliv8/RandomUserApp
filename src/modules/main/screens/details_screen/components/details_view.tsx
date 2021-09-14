import React from 'react';
import { Text, View, Card, TouchableOpacity } from '@core/components';
import { UserDataInterface, UserInterface } from '@app/redux/types';
import { Image } from 'react-native';
import { dateDiffrence } from '@core/helpers/format_date'
import { styles } from './details.styles';
interface Props {
  data: UserDataInterface;
}

export const CardItems = (props: Props): JSX.Element => {
  const { data } = props;
  return (
    <View style={styles.layout}>
        <View >
          <Image
            style={styles.image}
            source={{
              uri: data.picture.large,
            }}
          />
          <View style={styles.marginStyle}>
            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${data.name.title + " " + data.name.first + " " + data.name.last}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${data.gender}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${data.email}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${dateDiffrence(data?.registered?.date)}`}</Text>
            </View>
          </View>
        </View>
    </View>
  );
};
