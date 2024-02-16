import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RenderHtml from 'react-native-render-html';
import Share from 'react-native-share';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from '../../constants';
import useTemplate from '../../hooks/useTemplate';
import {IMAGES} from '../../images';
import {adduniqueId} from '../../redux/User/userSlice';
import {normalize} from '../../utils';
import styles from './styles';
const PreView = ({navigation}: any) => {
  // set of resume colors
  const colorData = [
    {background: '#487E78', textColor: 'black', titleColor: 'white'},
    {background: '#343B4B', textColor: 'white', titleColor: '#66cc99'},
    {background: '#AADFD7', textColor: 'black', titleColor: 'white'},
    {background: 'pink', textColor: 'black', titleColor: 'black'},
    {background: 'original'},
  ];
  const [resumecolor, setResumecolor] = useState<any>([]);
  const [showShareIcon, setShowShareIcon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filePath, setFilePath] = useState('');
  const [downloadProfessional, professional, source] = useTemplate(resumecolor);
  const {User}: any = useSelector(state => state);
  const dispatch = useDispatch();
  const Professional = {
    html: professional,
  };
  useEffect(() => {
    setItem();
  }, []);
  const setItem = async () => {
    // add UniqueId for Particular resume
    const detail = JSON.parse(await AsyncStorage.getItem('userResumeDetail'));
    let len: any = detail?.length;
    dispatch(adduniqueId(detail?.length ? len : 0));
  };
  const renderColor = ({item}: any) => {
    return (
      <>
        {item.background == 'original' ? (
          <TouchableOpacity onPress={() => setResumecolor(null)}>
            <FastImage
              source={IMAGES.originalResume}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.selectColorBtn, {backgroundColor: item?.background}]}
            //set user selected color for resume
            onPress={() => setResumecolor(item)}></TouchableOpacity>
        )}
      </>
    );
  };

  //For Creating Pdf and set user's Detail in asyncstorage
  const createPDF = async () => {
    setLoading(true);
    let options = {
      html:
        User?.userResume == 'Professional' ? downloadProfessional : source.html,
      fileName: `${User?.userProfile?.firstName}_${User?.userResume}`,
      directory: 'Documents',
      width: 612,
      height: 820,
    };
    let file = await RNHTMLtoPDF.convert(options);
    if (file.filePath) {
      setLoading(false);
      setFilePath(file.filePath);
      setShowShareIcon(true);
      await AsyncStorage.setItem('userResumeDetail', JSON.stringify(User));
      Alert.alert('Download Successful');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>Choose Color</Text>
        <FlatList
          data={colorData}
          horizontal
          renderItem={renderColor}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={{height: normalize(550)}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderHtml
            source={User?.userResume == 'Professional' ? Professional : source}
          />
        </ScrollView>
      </View>
      <View style={styles.tabBar}>
        <View style={styles.plusIconline}>
          <TouchableOpacity style={styles.iconBtnView} onPress={createPDF}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <FastImage source={IMAGES.downloadIcon} style={styles.iconImg} />
            )}
          </TouchableOpacity>
        </View>
        {showShareIcon && filePath && (
          <View style={styles.ChangeTemplateIcon}>
            <TouchableOpacity
              style={styles.iconBtnView}
              onPress={async () => {
                //Share feature
                Share.open({
                  title: 'Share Resume',
                  message: '',
                  url: `file://${filePath}`,
                  subject: 'Advertisement Data',
                });
              }}>
              <FastImage source={IMAGES.shareIcon} style={styles.iconImg} />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ChangeTemplateIcon}>
          <TouchableOpacity
            style={styles.iconBtnView}
            onPress={() => {
              setShowShareIcon(false);
              navigation.replace(ROUTES.SELECTTEMPLATES, {fromPreview: true});
            }}>
            <FastImage source={IMAGES.changeResume} style={styles.iconImg} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreView;
