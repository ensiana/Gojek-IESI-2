
import React from "react";
import { View, Text } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";

const HomeSearch = (props) => {
  return (
    <View>
      {/* input box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Mau kemana hari ini?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircleo"} size={16} />
          <Text> Hari ini</Text>

          <MaterialIcons name={"keyboard-arrow-down"} size={16} />

        </View>
      </View>
      {/* Last search  */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={16} color={'white'}/>
        </View>
        <Text style={styles.destination}>Last Destination</Text>
      </View>
      {/* Home Destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor:'#517ee8'}]}>
          <Entypo name={"home"} size={16} color={'white'}/>
        </View>
        <Text style={styles.destination}>To Go Destination</Text>
      </View>
    </View>
  );
}

export default HomeSearch;