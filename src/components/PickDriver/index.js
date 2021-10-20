
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';
import PickDriverRow from '../PickDriverRow';

import typesData from '../../assets/data/types';

const PickDriver = (props) => {

  const confirm = () => {
    console.warn('confirm');
  }

  return (
    <View style={styles.bg}>
      {typesData.map((type) => (
        <PickDriverRow type={type} />
      ))}
      <Pressable onPress={confirm} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center'
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Konfirmasi
        </Text>
      </Pressable>
    </View>
  );
};

export default PickDriver;