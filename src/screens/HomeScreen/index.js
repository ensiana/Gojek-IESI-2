
import React from 'react';
import { View, Text } from 'react-native';

import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      <HomeMap />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;