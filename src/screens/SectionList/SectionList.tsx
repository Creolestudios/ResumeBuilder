import React from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {ROUTES} from '../../constants';
import {IMAGES} from '../../images';
import styles from './styles';
const SectionList = ({navigation}: any) => {
  const sectionListData = [
    {
      id: 1,
      title: 'Personal Info',
      image: 'https://cdn-icons-png.flaticon.com/512/1361/1361913.png',
      onPress: () => {
        navigation.navigate(ROUTES.PROFILE);
      },
    },
    {
      id: 2,
      title: 'Objective',
      image: 'https://cdn-icons-png.flaticon.com/512/8484/8484670.png',
      onPress: () => {
        navigation.navigate(ROUTES.OBJECTIVE);
      },
    },
    {
      id: 3,
      title: 'Education',
      image: 'https://cdn-icons-png.flaticon.com/512/8576/8576501.png',
      onPress: () => {
        navigation.navigate(ROUTES.EDUCATION);
      },
    },
    {
      id: 4,
      title: 'Skills',
      image: 'https://cdn-icons-png.flaticon.com/512/1066/1066472.png',
      onPress: () => {
        navigation.navigate(ROUTES.SKILLS);
      },
    },
    {
      id: 5,
      title: 'Experience',
      image: 'https://cdn-icons-png.flaticon.com/512/5471/5471093.png',
      onPress: () => {
        navigation.navigate(ROUTES.EXPERIENCE);
      },
    },
    {
      id: 6,
      title: 'Projects',
      image:
        'https://i.pinimg.com/564x/87/88/bd/8788bd5555c7f89d1726d3327600802c.jpg',
      onPress: () => {
        navigation.navigate(ROUTES.PROJECTS);
      },
    },
    // {
    //   id: 7,
    //   title: 'Interest',
    //   image: 'https://cdn-icons-png.flaticon.com/512/5474/5474094.png',
    //   onPress: () => {
    //     navigation.navigate(ROUTES.COMMONSCREEN, {
    //       btntitle: 'Interest',
    //       modal: 'Interest',
    //     });
    //   },
    // },
    // {
    //   id: 8,
    //   title: 'Language',
    //   image: 'https://cdn-icons-png.flaticon.com/512/2014/2014326.png',
    // },
    // {
    //   id: 9,
    //   title: 'Add Section',
    //   image: 'https://cdn-icons-png.flaticon.com/512/1263/1263914.png',
    // },
  ];
  const {User}: any = useSelector(state => state);
  const renderSections = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={item.onPress}>
        <FastImage source={{uri: item.image}} style={styles.sectionImg} />
        <Text style={styles.cardTitle}>{item?.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={sectionListData}
          contentContainerStyle={styles.flatListContainer}
          renderItem={renderSections}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ItemSeparatorComponent={() => (
            <View style={{marginHorizontal: 20}}></View>
          )}
        />
      </View>
      <View style={styles.tabBar}>
        <View style={styles.plusIconline}>
          <TouchableOpacity
            style={styles.plusIconBtn}
            onPress={() => {
              if (User?.userProfile?.firstName && User?.userProfile?.lastName) {
                navigation.navigate(ROUTES.PREVIEW);
              } else {
                Alert.alert('Please Enter Profile Detail');
              }
            }}>
            <FastImage source={IMAGES.eyeIcon} style={styles.eyeIconImg} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SectionList;
