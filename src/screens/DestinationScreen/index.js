
import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, Text, Pressable } from 'react-native';
import PlacesAutocomplete from '../../components/PlacesAutocomplete';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';

const DestinationScreen = (props) => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);  

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          onChangeText={setFromText} 
          style={styles.textInput} 
          placeholder="Dari..." 
        />
        <TextInput 
          value={destinationText}
          onChangeText={setDestinationText} 
          style={styles.textInput} 
          placeholder="Ke..."
        />
      </View>
      <Pressable style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center'
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Konfirmasi
        </Text>
      </Pressable>
      {/* <PlacesAutocomplete /> */}
      {/* <PlacesAutocomplete value={this.state.value} onChange={this.handleChange}>
        {renderFunc}
      </PlacesAutocomplete>; */}

    </SafeAreaView>
  );
};

export default DestinationScreen;