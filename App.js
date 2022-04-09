/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'; 
import type {Node} from 'react';
import { View, Text } from "react-native";
// import createAppContainer from 'react-navigation';
// import createStackNavigator from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import DestinationScreen from "./src/screens/DestinationScreen";
import Result from "./src/screens/Result";

const App: () => Node = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

export default App;
