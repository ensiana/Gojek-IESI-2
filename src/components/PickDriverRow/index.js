
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FA5 from 'react-native-vector-icons/FontAwesome';

const PickDriverRow = (props) => {
  
  const {type} = props;
  const getImg = () => {
    if (type.type === "Go-Bike") {
      return require('../../assets/images/Go-Bike.jpg')
    }
    else if (type.type === "Go-Car") {
      return require('../../assets/images/Go-Car.jpg')
    }
    return require('../../assets/images/Go-CarXL.jpg')
  }

  return (
    <View style={styles.container}>

      {/* image */}
      <Image 
        style={styles.image} 
        source={getImg()} 
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={15} />
          1
        </Text>
        <Text style={styles.time}>
          12:00PM
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <FA5 name={'money'} size={18} color={'#58ed80'} />
        <Text style={styles.price}>
          Rp{type.price}K
        </Text>
      </View>
    </View>
  );
};

export default PickDriverRow;