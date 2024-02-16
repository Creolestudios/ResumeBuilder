import {StyleSheet} from 'react-native';
import {normalize, respFontSize} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  templateImg: {
    height: normalize(300),
    width: normalize(200),
  },
  selectedTemplateImg: {
    height: normalize(350),
    width: normalize(240),
    alignSelf: 'center',
  },
  chooseTemplateText: {
    color: 'black',
    fontSize: respFontSize(20),
    alignSelf: 'flex-start',
  },
  flatlistContainer: {
    marginTop: 10,
    height: normalize(300),
  },
});
export default styles;
