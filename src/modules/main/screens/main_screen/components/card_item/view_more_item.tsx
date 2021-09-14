import React from 'react';
import { Text, View, Card } from '@core/components';
import { styles } from './card_item.styles';
import { TouchableOpacity } from 'react-native';

interface Props {
  toggleUnit: () => void;
}
export const ViewMoreItems = (props: Props): JSX.Element => {
  const {toggleUnit} = props;
  return (
    
    <View >
     
      <Card style={styles.card}>
      <TouchableOpacity onPress={toggleUnit}>
        <Text style={styles.boldcenter} category='h6'>View More</Text>
        </TouchableOpacity>
      </Card>
     
    </View>
   
  );
};
