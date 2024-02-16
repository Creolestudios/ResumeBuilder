import {Formik} from 'formik';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {AppButton} from '../../components/AppButtonCustom';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import {addProfileDetails, addProfileImg} from '../../redux/User/userSlice';
import {profileValidationSchema} from '../../utils/ValidationSchema';
import styles from './styles';

export default function Profile({navigation}: any) {
  interface FormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profession: string;
    email: string;
    address: string;
  }
  const {User}: any = useSelector(state => state);
  const handleSubmit = (values: FormValues) => {
    dispatch(addProfileDetails(values));
    navigation.goBack();
  };

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
        keyboardVerticalOffset={10}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <View style={styles.itemContainer}>
              <TouchableOpacity
                onPress={async () => {
                  ImagePicker.openPicker({
                    cropping: true,
                  }).then(image => {
                    dispatch(addProfileImg(image.path));
                  });
                }}>
                <FastImage
                  source={{
                    uri: User?.profileImage
                      ? User?.profileImage
                      : 'https://cdn-icons-png.flaticon.com/512/1361/1361913.png',
                  }}
                  style={styles.userProfileImg}
                />
              </TouchableOpacity>
            </View>
            <Formik
              initialValues={{
                firstName: User?.userProfile?.firstName
                  ? User?.userProfile?.firstName
                  : '',
                lastName: User?.userProfile?.lastName
                  ? User?.userProfile?.lastName
                  : '',
                email: User?.userProfile?.email ? User?.userProfile?.email : '',
                address: User?.userProfile?.address
                  ? User?.userProfile?.address
                  : '',
                profession: User?.userProfile?.profession
                  ? User?.userProfile?.profession
                  : '',
                phoneNumber: User?.userProfile?.phoneNumber
                  ? User?.userProfile?.phoneNumber
                  : '',
              }}
              validationSchema={profileValidationSchema}
              onSubmit={handleSubmit}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <CustomTextInput
                    label="FirstName : "
                    value={values.firstName}
                    errors={touched.firstName ? errors.firstName : ''}
                    setValue={handleChange('firstName')}
                    placeholder="FirstName"
                  />
                  <CustomTextInput
                    label="LastName : "
                    value={values.lastName}
                    errors={touched.lastName ? errors.lastName : ''}
                    setValue={handleChange('lastName')}
                    placeholder="LastName"
                  />
                  <CustomTextInput
                    label="Phone : "
                    value={values.phoneNumber}
                    errors={touched.phoneNumber ? errors.phoneNumber : ''}
                    setValue={handleChange('phoneNumber')}
                    placeholder="Phone"
                  />
                  <CustomTextInput
                    label="Profession : "
                    value={values.profession}
                    errors={touched.profession ? errors.profession : ''}
                    setValue={handleChange('profession')}
                    placeholder="Profession"
                  />
                  <CustomTextInput
                    label="Email Address : "
                    value={values.email}
                    errors={touched.email ? errors.email : ''}
                    setValue={handleChange('email')}
                    placeholder="Email Address"
                  />
                  <CustomTextInput
                    label="Address : "
                    value={values.address}
                    errors={touched.address ? errors.address : ''}
                    setValue={handleChange('address')}
                    placeholder="Address"
                  />
                  <AppButton
                    buttonTitle="Save"
                    onPress={handleSubmit}
                    commonStyle={true}
                  />
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
