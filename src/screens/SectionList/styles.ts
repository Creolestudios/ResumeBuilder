import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {normalize, respFontSize} from '../../utils';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', alignItems: 'center'},
  innerContainer: {marginHorizontal: normalize(12), marginTop: normalize(10)},
  flatListContainer: {gap: 20, paddingVertical: 80},
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(193),
    marginHorizontal: normalize(5),
    borderWidth: 1,
    width: normalize(170),
    borderColor: 'blue',
    borderRadius: 10,
  },
  sectionImg: {width: normalize(100), height: normalize(100)},
  cardTitle: {color: 'black', fontSize: respFontSize(20), marginTop: 5},
  preViewBtn: {
    backgroundColor: COLORS.prBlue,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: normalize(10),
    right: normalize(10),
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#3683F6',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconline: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  plusIconBtn: {
    backgroundColor: '#3683F6',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIconImg: {width: normalize(40), height: normalize(40)},
});
export default styles;
