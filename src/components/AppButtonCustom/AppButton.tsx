import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {normalize, respFontSize} from '../../utils';

interface IButtonProps {
  buttonTitle: string;
  style?: ViewStyle;
  buttonTitleStyle?: any;
  onPress(): any;
  isloading?: boolean;
  isdisabled?: boolean;
  commonStyle: boolean;
}

// Common Button
const AppButton = ({
  buttonTitle,
  style,
  onPress,
  isdisabled,
  commonStyle,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={commonStyle ? styles.btnStyle : [style]}
      onPress={onPress}
      disabled={isdisabled}>
      <Text style={styles.tileText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#3683F6',
    borderRadius: normalize(20),
    height: normalize(50),
    marginTop: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    color: 'white',
    fontSize: respFontSize(24),
    fontWeight: '400',
  },
});

export {AppButton};
