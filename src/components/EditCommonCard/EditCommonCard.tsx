import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {normalize} from '../../utils';
import styles from './styles';

interface InputProps {
  title: string;
  desc: string;
  onEditPress(): any;
  onDeletePress(): any;
}

//Common Component For Detail Card
const EditCommonCard = ({
  title,
  desc,
  onEditPress,
  onDeletePress,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <View style={{width: normalize(220)}}>
        <Text style={styles.titleText}>{title}</Text>
        {desc && <Text>{desc}</Text>}
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity style={styles.itemContainer} onPress={onEditPress}>
          <FastImage
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/29-512.png',
            }}
            style={styles.iconImg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={onDeletePress}>
          <FastImage
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/966/966489.png',
            }}
            style={styles.iconImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditCommonCard;
