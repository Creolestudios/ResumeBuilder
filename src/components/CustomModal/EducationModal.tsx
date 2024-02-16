import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addEducation, updateEducationDetail} from '../../redux/User/userSlice';
import {AppButton} from '../AppButtonCustom';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import commonStyles from './CommonStyles';
import DateModal from './DateModal';

interface IModal {
  closeModal(): void;
  modalVisible?: boolean;
  editSchoolName?: string;
  editDegree?: string;
  editAddress?: string;
  editPercentage?: string;
  editStartDate?: string;
  editEndDate?: string;
  isupdate?: boolean;
  selectItemId?: any;
}
const EducationModal = ({
  closeModal,
  modalVisible,
  editDegree,
  editSchoolName,
  editAddress,
  editPercentage,
  editStartDate,
  editEndDate,
  isupdate,
  selectItemId,
}: IModal) => {
  const [schoolName, setSchoolName] = useState(editSchoolName);
  const [degree, setDegree] = useState(editDegree);
  const [address, setAddress] = useState(editAddress);
  const {User}: any = useSelector(state => state);
  const [percentage, setPercentage] = useState(editPercentage);
  const [startDate, setStartDate] = useState(editStartDate);
  const [endDate, setEndDate] = useState(editEndDate);
  const dispatch = useDispatch();
  const [openStartCalendars, setOpenStartCalendars] = useState(false);
  const [openEndCalendars, setOpenEndCalendars] = useState(false);

  return (
    <>
      <Modal
        visible={modalVisible}
        onDismiss={closeModal}
        transparent={true}
        style={commonStyles.absolutePosition}
        onRequestClose={closeModal}
        animationType="none">
        <TouchableOpacity
          style={commonStyles.modalContainer}
          onPress={closeModal}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={() => null}>
              <View>
                <View style={commonStyles.modalItemView}>
                  <CustomTextInput
                    label="School Name : "
                    value={schoolName}
                    setValue={e => setSchoolName(e)}
                    placeholder="School Name"
                  />
                  <CustomTextInput
                    label="Address : "
                    value={address}
                    setValue={e => setAddress(e)}
                    placeholder="Address"
                  />
                  <CustomTextInput
                    label="Degree : "
                    value={degree}
                    setValue={e => setDegree(e)}
                    placeholder="Degree"
                  />
                  <CustomTextInput
                    label="Percentage : "
                    value={percentage}
                    setValue={e => setPercentage(e)}
                    placeholder="Percentage"
                  />
                  <CustomTextInput
                    label="StartDate : "
                    value={startDate}
                    setValue={e => setStartDate(e)}
                    placeholder="startDate"
                    onTouch={() => setOpenStartCalendars(true)}
                  />
                  <CustomTextInput
                    label="EndDate : "
                    value={endDate}
                    setValue={e => setEndDate(e)}
                    placeholder="EndDate"
                    onTouch={() => setOpenEndCalendars(true)}
                  />
                  <AppButton
                    commonStyle={true}
                    buttonTitle="Save"
                    onPress={() => {
                      if (isupdate) {
                        const item = {
                          schoolName: schoolName,
                          degree: degree,
                          address: address,
                          percentage: percentage,
                          startDate: startDate,
                          endDate: endDate,
                          id: selectItemId,
                        };
                        dispatch(updateEducationDetail(item));
                        closeModal();
                      } else {
                        const item = {
                          schoolName: schoolName,
                          degree: degree,
                          address: address,
                          percentage: percentage,
                          startDate: startDate,
                          endDate: endDate,
                          id: User?.education?.length + 1,
                        };
                        dispatch(addEducation(item));
                        closeModal();
                      }
                    }}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
        {openStartCalendars && (
          <DateModal
            calendarModalVisible={openStartCalendars}
            closeModal={() => setOpenStartCalendars(false)}
            selectDate={(date: any) => setStartDate(date)}
          />
        )}
        {openEndCalendars && (
          <DateModal
            calendarModalVisible={openEndCalendars}
            closeModal={() => setOpenEndCalendars(false)}
            selectDate={(date: any) => setEndDate(date)}
          />
        )}
      </Modal>
    </>
  );
};

export default EducationModal;
