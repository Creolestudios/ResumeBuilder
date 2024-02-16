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
    marginTop: 50,
  },
  btnText: {
    color: 'white',
    fontSize: respFontSize(20),
    fontWeight: '700',
  },
  skillsContainer: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillsBtn: {
    backgroundColor: COLORS.prBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    marginTop: 50,
    paddingHorizontal: 30,
  },
  closeBtn: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  skillText: {
    color: 'black',
    fontSize: respFontSize(24),
    fontWeight: '800',
  },
});
export default styles;
