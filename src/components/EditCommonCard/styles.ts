import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {normalize} from '../../utils';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: normalize(350),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: COLORS.prBlue,
  },
  titleText: {color: 'black', fontWeight: '400', flexWrap: 'wrap'},
  itemContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#F2F3F4',
  },
  iconImg: {width: 25, height: 25},
});
export default styles;
