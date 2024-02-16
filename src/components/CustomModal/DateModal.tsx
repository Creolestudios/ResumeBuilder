import Moment from 'moment';
import React, {useState} from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import {COLORS} from '../../styles/colors';
import {normalize} from '../../utils';

interface IModal {
  closeModal(): void;
  calendarModalVisible?: boolean;
  selectDate(date: string): any;
}
const DateModal = ({closeModal, calendarModalVisible, selectDate}: IModal) => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      {Platform.OS === 'android' ? (
        <Modal visible={calendarModalVisible} transparent={true}>
          <TouchableOpacity style={styles.container} onPress={closeModal}>
            <TouchableWithoutFeedback onPress={() => null}>
              <MonthPicker
                onChange={(_: any, newDate: any) =>
                  selectDate(Moment(newDate).format('MMM YYYY'))
                }
                value={date}
              />
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      ) : (
        <Modal visible={calendarModalVisible} transparent={true}>
          <MonthPicker
            onChange={(_: any, newDate: any) =>
              selectDate(Moment(newDate).format('MMM YYYY'))
            }
            value={date}
          />
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,1,0.7)',
  },
  calendarContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    width: normalize(350),
  },
  calendarThem: {
    selectedDayBackgroundColor: COLORS.prBlue,
    todayTextColor: 'skyblue',
  },
});

export default DateModal;
