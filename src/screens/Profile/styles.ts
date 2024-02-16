import {StyleSheet} from 'react-native';
import {normalize} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  innerContainer: {
    marginHorizontal: normalize(20),
    marginTop: normalize(40),
    marginBottom: normalize(20),
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userProfileImg: {
    marginTop: 20,
    width: normalize(120),
    height: normalize(120),
    borderRadius: normalize(200),
  },
  cameraImg: {
    width: normalize(25),
    height: normalize(25),
  },
  cameraView: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: normalize(10),
    right: 140,
    backgroundColor: 'white',
    position: 'absolute',
  },
});
export default styles;
