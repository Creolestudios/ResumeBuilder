import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import SelectDropdown from 'react-native-select-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import closeIcon from '../../images/close.png';
import {addskills, removeSkills} from '../../redux/User/userSlice';
import styles from './styles';

const Skills = () => {
  // suggestskills to user
  const suggestSkills = [
    'Java',
    'JavaScript',
    'python',
    'C#',
    'C++',
    'C',
    'ReactJs',
    'React-Native',
    'Android',
    'Swift',
  ];
  const [userSkills, setUserSkills] = useState<any>([]);
  const dispatch = useDispatch();
  const {User}: any = useSelector(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skillsContainer}>
        {User?.skills.map((item: any) => {
          return (
            <View style={styles.skillsBtn}>
              <Text style={{color: 'white', fontWeight: '400'}}>{item}</Text>
              <TouchableOpacity
                onPress={_ => {
                  const deleteSkills = userSkills.filter(
                    selectItem => selectItem != item,
                  );
                  setUserSkills(deleteSkills);
                  dispatch(removeSkills(item));
                }}
                style={styles.closeBtn}>
                <FastImage
                  source={closeIcon}
                  resizeMode="cover"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {/* DropDown of skills */}
      <SelectDropdown
        data={suggestSkills}
        searchPlaceHolder="Enter Skill"
        defaultButtonText="+Add Skill"
        buttonStyle={styles.button}
        onSelect={(selectedItem, index) => {
          if (!userSkills.includes(selectedItem)) {
            setUserSkills([...userSkills, selectedItem]);
            dispatch(addskills(selectedItem));
          }
        }}
        buttonTextStyle={styles.btnText}
        dropdownIconPosition="right"
        buttonTextAfterSelection={(selectedItem, index) => {
          return '+Add Skills';
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </SafeAreaView>
  );
};

export default Skills;
