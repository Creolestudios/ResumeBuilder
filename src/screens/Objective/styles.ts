import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles/colors';
import {normalize, respFontSize} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {marginTop: normalize(40), marginHorizontal: 20},
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.prBlue,
    borderRadius: 10,
    padding: 10,
  },
  cardView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(300),
    height: 250,
    flexWrap: 'wrap',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.prBlue,
  },
  inputText: {color: 'black', fontSize: respFontSize(24)},
  objectiveText: {
    fontSize: respFontSize(30),
    marginVertical: 30,
    color: 'black',
  },
});
export default styles;
