import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FONTS} from '../../constants';
import {
  addExperience,
  updateExperienceDetail,
} from '../../redux/User/userSlice';
import {COLORS} from '../../styles/colors';
import {normalize, respFontSize} from '../../utils';
import {AppButton} from '../AppButtonCustom';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import DateModal from './DateModal';

interface IModal {
  closeModal(): void;
  modalVisible?: boolean;
  editJobTitle?: string;
  editCompanyName?: string;
  editaddress?: string;
  editStartDate?: string;
  editEndDate?: string;
  isupdate?: boolean;
  selectItemId?: any;
}
const ExperienceModal = ({
  closeModal,
  modalVisible,
  editJobTitle,
  editCompanyName,
  editaddress,
  editStartDate,
  editEndDate,
  isupdate,
  selectItemId,
}: IModal) => {
  const [jobTitle, setJobTitle] = useState(editJobTitle);
  const [companyName, setCompanyName] = useState(editCompanyName);
  const [address, setAddress] = useState(editaddress);
  const [startDate, setStartDate] = useState(editStartDate);
  const [endDate, setEndDate] = useState(editEndDate);
  const dispatch = useDispatch();
  const [openStartCalendars, setOpenStartCalendars] = useState(false);
  const [openEndCalendars, setOpenEndCalendars] = useState(false);
  const {User}: any = useSelector(state => state);

  const values = {};
  return (
    <>
      <Modal
        visible={modalVisible}
        onDismiss={closeModal}
        transparent={true}
        style={styles.absolutePosition}
        onRequestClose={closeModal}
        animationType="none">
        <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
          <TouchableWithoutFeedback onPress={() => null}>
            <View style={{width: normalize(350), height: normalize(390)}}>
              <View style={styles.modalItemView}>
                <CustomTextInput
                  label="JobTitle : "
                  value={jobTitle}
                  setValue={e => setJobTitle(e)}
                  placeholder="JobTitle"
                />
                <CustomTextInput
                  label="CompanyName : "
                  value={companyName}
                  setValue={e => setCompanyName(e)}
                  placeholder="CompanyName"
                />
                <CustomTextInput
                  label="Address : "
                  value={address}
                  setValue={e => setAddress(e)}
                  placeholder="Address"
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
                        jobTitle: jobTitle,
                        companyName: companyName,
                        address: address,
                        startDate: startDate,
                        endDate: endDate,
                        id: selectItemId,
                      };
                      dispatch(updateExperienceDetail(item));
                      closeModal();
                    } else {
                      values['jobTitle'] = jobTitle;
                      values['companyName'] = companyName;
                      values['address'] = address;
                      values['startDate'] = startDate;
                      values['endDate'] = endDate;
                      values['id'] = User?.experience?.length + 1;
                      dispatch(addExperience(values));
                      closeModal();
                    }
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <DateModal
        calendarModalVisible={openStartCalendars}
        closeModal={() => setOpenStartCalendars(false)}
        selectDate={(date: any) => setStartDate(date)}
      />
      <DateModal
        calendarModalVisible={openEndCalendars}
        closeModal={() => setOpenEndCalendars(false)}
        selectDate={(date: any) => setEndDate(date)}
      />
    </>
  );
};
const styles = StyleSheet.create({
  absolutePosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,1,0.7)',
  },
  modalItemView: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 20,
    width: normalize(350),
    paddingVertical: 50,
  },
  modalbtn: {
    position: 'absolute',
    right: normalize(7),
    top: normalize(5),
  },
  buttonView: {
    width: '100%',
    height: normalize(48),
    marginTop: normalize(16),
  },
  buttonText: {
    fontSize: respFontSize(14),
    position: 'absolute',
    color: COLORS.white,
    fontWeight: '600',
    fontFamily: FONTS.Inter,
    textAlign: 'center',
  },
  barcodeHeight: {
    width: 100,
    height: 20,
  },
});

export default ExperienceModal;
