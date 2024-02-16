import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import EducationModal from '../../components/CustomModal/EducationModal';
import ExperienceModal from '../../components/CustomModal/ExperienceModal';
import ProjectModal from '../../components/CustomModal/ProjectModal';
import styles from './styles';

// common screen after section select;
const CommonScreen = ({value}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnText}>+ Add {value}</Text>
      </TouchableOpacity>
      {/* Render Modal Accordingly Current Screen */}
      {modalVisible && value === 'Experience' && (
        <ExperienceModal
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      )}
      {modalVisible && value === 'Education' && (
        <EducationModal
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      )}
      {modalVisible && value === 'Projects' && (
        <ProjectModal
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default CommonScreen;
