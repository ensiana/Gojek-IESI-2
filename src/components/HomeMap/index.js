
import React from "react";
import { View, Text } from "react-native";
import MapView from 'react-native-maps';

const HomeMap = (props) => {
  return (
    <View style={{
      height: 325, 
      justifyContent : "center",
      alignItems: "center"}}>
      
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: -8.278079,
          longitude: 113.539307,
          latitudeDelta: 10.0922,
          longitudeDelta: 10.0421,
          minZoomLevel: 15,
        }}
      />
    </View>
  );
}

export default HomeMap;