import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {ROUTES} from '../../constants';
import {IMAGES} from '../../images';
import {addPreviousDetail} from '../../redux/User/userSlice';
import styles from './styles';

const DashBoard = ({navigation}: any) => {
  // For fill past user's Detail from AsyncStorage so user can easily modify details
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = async () => {
    const detail = JSON.parse(await AsyncStorage.getItem('userResumeDetail'));
    if (detail) {
      // Add past Detail
      dispatch(addPreviousDetail(detail));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FastImage style={styles.noCvImg} source={IMAGES.noCvIcon} />
      <Text style={styles.noRecentText}>No recent CVs yet</Text>
      <Text>start by creating your first CV!</Text>
      <View style={styles.tabBar}>
        <View style={styles.plusIconline}>
          <TouchableOpacity
            style={styles.plusIconBtn}
            onPress={() => navigation.navigate(ROUTES.SELECTTEMPLATES)}>
            <FastImage source={IMAGES.plusIcon} style={styles.plusIconImg} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;
