import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Department Event', value: 'departmentEvent'},
    {label: 'KBC Event', value: 'kbcEvent'},
    {label: 'Event Recap', value: 'eventRecap'},
    {label: 'Recruitment Post', value: 'recruitmentPost'},
    {label: 'Humans of KBC', value: 'humansOfKBC'},
  ]);
  const [value, setValue] = useState(null);


  return (
    <>
      <Text style={styles.text}>Post Type (optional)</Text>
      <DropDownPicker 
            items={items}
            open={open}
            value={value}
            setOpen={setOpen}
            setValue= {setValue}
            setItems={setItems}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text:{
    marginTop: 15,
    marginBottom: 5,
    fontSize: 15,
    marginRight: '5%',
  }
  })

export default Dropdown;