import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {respFontSize} from '../../utils';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', alignItems: 'center'},
  button: {
    backgroundColor: COLORS.prBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 300,
    marginTop: 40,
  },
  btnText: {
    color: 'white',
    fontSize: respFontSize(20),
    fontWeight: '700',
  },
});
export default styles;
