import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants';
import {COLORS} from '../../styles/colors';
import {normalize, respFontSize} from '../../utils';

const commonStyles = StyleSheet.create({
  absolutePosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: normalize(50),
    backgroundColor: 'rgba(0,0,1,0.7)',
  },
  modalItemView: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 20,
    width: normalize(350),
    paddingVertical: 50,
  },
  modalbtn: {
    position: 'absolute',
    right: normalize(7),
    top: normalize(5),
  },
  buttonView: {
    width: '100%',
    height: normalize(48),
    marginTop: normalize(16),
  },
  buttonText: {
    fontSize: respFontSize(14),
    position: 'absolute',
    color: COLORS.white,
    fontWeight: '600',
    fontFamily: FONTS.Inter,
    textAlign: 'center',
  },
  barcodeHeight: {
    width: 100,
    height: 20,
  },
});
export default commonStyles;
