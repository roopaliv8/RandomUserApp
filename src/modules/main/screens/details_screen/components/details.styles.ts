import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin:20,
    alignItems:'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { width: 200, height: 200 },
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
