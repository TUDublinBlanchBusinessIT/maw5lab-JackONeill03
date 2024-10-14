import { Text, SafeAreaView, TextInput, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';


export default function Food({screenstyle}) {

  const [snackList, setMovieList] = useState([
   {'id': 1, "title": "Small Popcorn", "price": 4.95},
   {'id' : 2, "title": "Medium Popcorn", "price": 6.99}, 
   {'id': 3, "title": "Large Popcorn", "price": 7.99}
  ]);
  const [snackChoice, setSnackChoice] = useState("Small Popcorn")


  return (
    <View style={screenstyle}>
    <Picker style={styles.textbox}
    selectedValue={snackChoice}
    onValueChange={(id.itemValue)} => setSnackChoice{(itemValue)}
    { snackList.map((snack) => {
          return <Picker.Item label={snack.name} value={snack.name}/>
    ))}
</Picker>
</View>
  );
}

const styles = StyleSheet.create({ 
  label: {
    flexDirection:"row",
    fontSize: 24,
    fontWeight: "bold",
  },
  textbox:  {
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    border: "1px solid black",
    width: "100%",
    fontSize: 24,
    marginBottom: 14,
    backgroundColor: "white",
  },
  button: {
    width: "100%",
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    backgroundColor: '#0569FF',
    borderColor: '#0569FF'
  }
  
});
