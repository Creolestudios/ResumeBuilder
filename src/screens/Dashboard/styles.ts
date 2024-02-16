import {StyleSheet} from 'react-native';
import {normalize, respFontSize} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noCvImg: {
    width: normalize(200),
    height: normalize(200),
    marginLeft: normalize(40),
  },
  noRecentText: {
    color: 'black',
    fontSize: respFontSize(24),
    marginTop: 20,
    fontWeight: '600',
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
  plusIconImg: {width: normalize(30), height: normalize(30)},
});

export default styles;
