import {StyleSheet} from 'react-native';
import {normalize, respFontSize} from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 100,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontSize: respFontSize(24),
    fontWeight: '500',
  },
  flatListContainer: {
    gap: 10,
    alignItems: 'center',
  },
  selectColorBtn: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#3683F6',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-around',
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
  ChangeTemplateIcon: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 60,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  iconBtnView: {
    backgroundColor: '#3683F6',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImg: {width: normalize(30), height: normalize(30)},
});
export default styles;
