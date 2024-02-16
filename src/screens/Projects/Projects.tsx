import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProjectModal from '../../components/CustomModal/ProjectModal';
import EditCommonCard from '../../components/EditCommonCard/EditCommonCard';
import {removeProject} from '../../redux/User/userSlice';
import CommonScreen from '../CommonScreen/CommonScreen';

const Projects = () => {
  const {User}: any = useSelector(state => state);
  const [editModal, setEditModal] = useState(false);
  const [selectItem, setSelectItem] = useState<any>();
  const dispatch = useDispatch();
  const renderProjects = ({item}: any) => {
    return (
      <EditCommonCard
        title={item?.title}
        desc={item?.desc}
        onEditPress={() => {
          setSelectItem(item);
          setEditModal(true);
        }}
        onDeletePress={() => {
          dispatch(removeProject(item?.title));
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 10}}>
          {User.projects && (
            <FlatList
              data={User.projects}
              renderItem={renderProjects}
              ItemSeparatorComponent={() => (
                <View style={{marginVertical: 10}}></View>
              )}
            />
          )}
          {editModal && (
            <ProjectModal
              modalVisible={editModal}
              closeModal={() => setEditModal(false)}
              title={selectItem?.title}
              description={selectItem?.desc}
              isupdate={true}
              selectItem={selectItem}
            />
          )}
          <CommonScreen value="Projects" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Projects;
