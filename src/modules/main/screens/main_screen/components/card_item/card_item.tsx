import React from 'react';
import { Text, View, Card, TouchableOpacity } from '@core/components';
import { styles } from './card_item.styles';
import { UserDataInterface, UserInterface } from '@app/redux/types';
import { Image } from 'react-native';
import { dateDiffrence } from '@core/helpers/format_date'

interface Props {
  data: UserDataInterface;
  toggleUnit: (data: UserDataInterface) => void;
}

export const CardItems = (props: Props): JSX.Element => {
  const { data, toggleUnit } = props;
  return (
    <View style={styles.layout}>
      <Card style={styles.card} onPress={() => { toggleUnit(data) }}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: data.picture.thumbnail,
            }}
          />
          <View style={styles.marginStyle}>
            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${data?.name?.title + " " + data?.name?.first + " " + data?.name?.last}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${data?.gender}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${data?.email}`}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.bold} category='h6'>{`${dateDiffrence(data?.registered?.date)}`}</Text>
            </View>

          </View>
        </View>
      </Card>
    </View>
  );
};
