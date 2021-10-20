
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#ebebeb',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText: {
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    padding: 17,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  },
  iconContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 25,
  },
  destination: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16
  }
});

export default styles;