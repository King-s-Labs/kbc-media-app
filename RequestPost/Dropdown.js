import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Instagram', value: 'instagram'},
    {label: 'LinkedIn', value: 'linkedin'}
  ]);
  const [value, setValue] = useState(null);

  const handleOpenPicker = () => {
    setOpen(true);
  };

  const handleClosePicker = () => {
    setOpen(false);
  };

  return (
    <>
        <Text style={styles.text}>Platform</Text>
        <DropDownPicker 
              zIndex={10000}
              items={items}
              open={open}
              value={value}
              setOpen={setOpen}
              setValue= {setValue}
              setItems={setItems}
              onOpen={handleOpenPicker}
              onClose={handleClosePicker}
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