
import React from 'react';
import { View, Text } from 'react-native';

import HomeMap from '../../components/HomeMap';
import PickDriver from '../../components/PickDriver';

const Result = (props) => {
  return (
    <View>
      <HomeMap />
      <PickDriver />
    </View>
  );
};

export default Result;