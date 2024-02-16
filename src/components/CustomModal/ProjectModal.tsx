import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProject, updateProjectDetail} from '../../redux/User/userSlice';
import {normalize} from '../../utils';
import {AppButton} from '../AppButtonCustom';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import commonStyles from './CommonStyles';

interface IModal {
  closeModal(): void;
  modalVisible?: boolean;
  title?: string;
  description?: string;
  isupdate?: boolean;
  selectItem?: any;
}
const ProjectModal = ({
  closeModal,
  modalVisible,
  title,
  description,
  isupdate,
  selectItem,
}: IModal) => {
  const [projectTitle, setProjectTitle] = useState(title);
  const [desc, setDesc] = useState(description);
  const dispatch = useDispatch();
  const {User}: any = useSelector(state => state);

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
          <TouchableWithoutFeedback onPress={() => null}>
            <View style={{width: normalize(350), height: normalize(390)}}>
              <View style={commonStyles.modalItemView}>
                <CustomTextInput
                  label="Project Title : "
                  value={projectTitle}
                  setValue={e => setProjectTitle(e)}
                  placeholder="Project Title"
                />
                <CustomTextInput
                  label="Project Desc : "
                  value={desc}
                  setValue={e => setDesc(e)}
                  placeholder="Project Desc"
                />
                <AppButton
                  commonStyle={true}
                  buttonTitle="Save"
                  onPress={() => {
                    if (isupdate) {
                      const item = {
                        title: projectTitle,
                        desc: desc,
                        id: selectItem?.id,
                      };
                      dispatch(updateProjectDetail(item));
                      closeModal();
                    } else {
                      const item = {
                        title: projectTitle,
                        desc: desc,
                        id: User?.projects?.length + 1,
                      };
                      dispatch(addProject(item));
                      closeModal();
                    }
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ProjectModal;
