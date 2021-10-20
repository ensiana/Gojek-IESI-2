import React from 'react';
import { View, TextInput, SafeAreaView, Text } from 'react-native';
import scriptLoader from 'react-async-script-loader';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ' ' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <View>
            <TextInput
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <View className="autocomplete-dropdown-container">
              {loading && <View><Text>Loading...</Text></View>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <View
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <Text>{suggestion.description}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyD2_DI5ajfWk1t3WLsAZJxK89vjC0Yf5z8&libraries=places'])(LocationSearchInput);
