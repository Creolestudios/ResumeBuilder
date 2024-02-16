import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ExperienceModal from '../../components/CustomModal/ExperienceModal';
import EditCommonCard from '../../components/EditCommonCard/EditCommonCard';
import {removeExperience} from '../../redux/User/userSlice';
import CommonScreen from '../CommonScreen/CommonScreen';

const Experience = () => {
  const {User}: any = useSelector(state => state);
  const [selectItem, setSelectItem] = useState<any>();
  const [editModal, setEditModal] = useState(false);
  const dispatch = useDispatch();
  const renderProjects = ({item}: any) => {
    return (
      <EditCommonCard
        title={item?.companyName}
        desc={item?.jobTitle}
        onEditPress={() => {
          setSelectItem(item);
          setEditModal(true);
        }}
        onDeletePress={() => dispatch(removeExperience(item?.id))}
      />
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 10}}>
          {User?.experience && (
            <FlatList
              data={User?.experience}
              renderItem={renderProjects}
              ItemSeparatorComponent={() => (
                <View style={{marginVertical: 10}}></View>
              )}
            />
          )}
          {editModal && (
            <ExperienceModal
              editJobTitle={selectItem?.jobTitle}
              editCompanyName={selectItem?.companyName}
              editStartDate={selectItem?.startDate}
              editEndDate={selectItem?.endDate}
              editaddress={selectItem?.address}
              modalVisible={editModal}
              isupdate={true}
              selectItemId={selectItem?.id}
              closeModal={() => setEditModal(false)}
            />
          )}
          <CommonScreen value="Experience" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Experience;
