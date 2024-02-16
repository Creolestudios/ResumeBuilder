import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EducationModal from '../../components/CustomModal/EducationModal';
import EditCommonCard from '../../components/EditCommonCard/EditCommonCard';
import {removeEducation} from '../../redux/User/userSlice';
import CommonScreen from '../CommonScreen/CommonScreen';

const Education = () => {
  const {User}: any = useSelector(state => state);
  const [selectItem, setSelectItem] = useState<any>();
  const [educationModal, setEducationModal] = useState(false);
  const dispatch = useDispatch();
  const renderEducation = ({item}: any) => {
    // Card Screen and Function of EditDetail and DeleteDetail.
    return (
      <EditCommonCard
        title={item?.schoolName}
        desc={item?.degree}
        onEditPress={() => {
          setSelectItem(item);
          setEducationModal(true);
        }}
        onDeletePress={() => dispatch(removeEducation(item?.id))}
      />
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 10}}>
          {User?.education && (
            <FlatList
              data={User?.education}
              renderItem={renderEducation}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={{marginVertical: 10}}></View>
              )}
            />
          )}
          {educationModal && (
            <EducationModal
              editSchoolName={selectItem?.schoolName}
              editDegree={selectItem?.degree}
              editAddress={selectItem?.address}
              editPercentage={selectItem?.percentage}
              editStartDate={selectItem?.startDate}
              editEndDate={selectItem?.endDate}
              isupdate={true}
              modalVisible={educationModal}
              closeModal={() => setEducationModal(false)}
              selectItemId={selectItem?.id}
            />
          )}
          {/* Bottom Common View */}
          <CommonScreen value="Education" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Education;
