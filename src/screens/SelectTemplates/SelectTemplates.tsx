import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {AppButton} from '../../components/AppButtonCustom';
import {ROUTES} from '../../constants';
import Professional from '../../images/TemplatesImages/Professional.png';
import simpleResume from '../../images/TemplatesImages/Simple.png';
import {selectResume} from '../../redux/User/userSlice';
import {COLORS} from '../../styles/colors';
import {normalize} from '../../utils';
import styles from './styles';

const SelectTemplates = ({navigation, route}: any) => {
  const [selectedTemplate, setSelectedTemplate] = useState(simpleResume);
  const [resumeName, setResumeName] = useState('simpleResume');
  const templatesImage = [
    {image: simpleResume, id: 1, name: 'simpleResume'},
    {image: Professional, id: 2, name: 'Professional'},
  ];
  const dispatch = useDispatch();
  const renderTemplatesImages = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setResumeName(item?.name);
          setSelectedTemplate(item?.image);
          dispatch(selectResume(item?.name));
        }}>
        <FastImage
          source={item?.image}
          style={
            selectedTemplate == item?.image
              ? [
                  {borderWidth: 2, borderColor: COLORS.prBlue},
                  styles.templateImg,
                ]
              : [styles.templateImg]
          }
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <FastImage
            source={selectedTemplate}
            style={[
              styles.selectedTemplateImg,
              selectedTemplate
                ? {borderWidth: 1, borderRadius: 10, borderColor: '#3683F6'}
                : null,
            ]}
            resizeMode="stretch"
          />
          <Text style={styles.chooseTemplateText}>Choose Template</Text>
          <FlatList
            data={templatesImage}
            renderItem={renderTemplatesImages}
            horizontal
            contentContainerStyle={styles.flatlistContainer}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{marginHorizontal: 10}}></View>
            )}
          />
          <AppButton
            buttonTitle="Select"
            onPress={() => {
              dispatch(selectResume(resumeName));
              if (route?.params?.fromPreview) {
                navigation.navigate(ROUTES.PREVIEW);
              } else {
                navigation.navigate(ROUTES.SECTIONLIST);
              }
            }}
            commonStyle={true}
          />
          <View style={{marginVertical: normalize(10)}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectTemplates;
