import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants';
import {COLORS} from '../../styles/colors';
import {normalize} from '../../utils';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10,
    width: '100%',
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.prBlue,
  },
  flexdirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    color: COLORS.prBlue,
    fontFamily: FONTS.Inter,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    height: normalize(40),
    width: '100%',
    borderRadius: 8,
    color: COLORS.black,
    padding: 0,
  },
  eyeImage: {
    width: normalize(20),
    height: normalize(20),
  },
  error: {
    paddingHorizontal: 5,
    color: 'red',
    marginTop: 5,
  },
});
export default styles;
