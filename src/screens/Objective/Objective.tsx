import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppButton} from '../../components/AppButtonCustom';
import {addObjective} from '../../redux/User/userSlice';
import styles from './styles';

export default function Objective({navigation}: any) {
  const {User}: any = useSelector(state => state);
  const [objective, setObjective] = useState(User?.objective);
  const dispatch = useDispatch();
  //suggest set of Objectives to user.
  const objectives = [
    {
      id: 1,
      desc: 'To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.',
    },
    {
      id: 2,
      desc: 'To secure employment with a reputable company, where I can utilize my skills and business studies background to the maximum.',
    },
    {
      id: 3,
      desc: 'To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.',
    },
  ];
  const renderObjectives = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => setObjective(item.desc)}>
        <View style={styles.cardView}>
          <Text style={styles.inputText}>{item.desc}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.itemContainer}>
          <TextInput
            value={objective}
            onChangeText={e => setObjective(e)}
            multiline={true}
            numberOfLines={5}
            style={styles.textInput}
          />
          <Text style={styles.objectiveText}>Objectives</Text>
          <FlatList
            data={objectives}
            renderItem={renderObjectives}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          {/* Common Button and add Detail in user's Detail */}
          <AppButton
            buttonTitle="save"
            onPress={() => {
              objective && dispatch(addObjective(objective));
              navigation.goBack();
            }}
            commonStyle={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
