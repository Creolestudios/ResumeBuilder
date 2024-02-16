import React, {useState} from 'react';
import {Platform, Text, TextInput, View, ViewStyle} from 'react-native';
import styles from './styles';
interface InputProps {
  secureTextEntry?: boolean;
  label?: string;
  value?: string;
  setValue?(text: string): void;
  placeholder?: string;
  keyboardType?: any;
  style?: ViewStyle;
  onPressShowPass?: void;
  inputstyle?: ViewStyle;
  onBlur?(text: any): any;
  errors?: string | undefined;
  isEditable?: boolean;
  testID?: string;
  errorTestId?: string;
  onTouch?(): any;
}
// TextInput Common Component
const CustomTextInput = ({
  secureTextEntry,
  label,
  style,
  value,
  setValue,
  placeholder,
  keyboardType,
  inputstyle,
  onBlur,
  errors,
  isEditable,
  testID,
  onTouch,
  errorTestId,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        {(label && focused) || value ? (
          <Text style={[styles.labelText, style]}>{label}</Text>
        ) : null}
        <View style={styles.flexdirection}>
          <TextInput
            testID={testID}
            onBlur={() => setFocused(false)}
            secureTextEntry={
              secureTextEntry ? (showPassword ? true : false) : false
            }
            value={value}
            onFocus={() => (focused ? setFocused(false) : setFocused(true))}
            onChangeText={setValue}
            style={[styles.input, inputstyle]}
            placeholder={!focused ? placeholder : ''}
            keyboardType={
              keyboardType
                ? keyboardType
                : Platform.OS == 'android'
                ? 'ascii-capable'
                : 'ascii-capable'
            }
            editable={isEditable}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            autoCapitalize="none"
            onTouchStart={onTouch ? onTouch : () => null}
          />
        </View>
      </View>
      {errors ? (
        <Text style={styles.error} testID={errorTestId}>
          {errors}
        </Text>
      ) : null}
    </>
  );
};

export default CustomTextInput;
