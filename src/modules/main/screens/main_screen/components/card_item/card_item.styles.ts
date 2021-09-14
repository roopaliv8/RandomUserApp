import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 20,
    justifyContent: 'flex-start',
    margin:5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { width: 100, height: 100 },
  currentTemp: {
    textAlign: 'center',
    fontSize: 60,
    margin: 40,
  },
  date: {
    marginTop: 20,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  boldcenter: {
    fontWeight: 'bold',
    alignSelf:'center',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    marginRight:10
  },

  marginStyle: {
    marginLeft: 20,
  },
});
