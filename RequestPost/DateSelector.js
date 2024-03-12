import React, { useState } from 'react';
import { Alert, Button, View, TextInput, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

const DateSelector = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Close date picker on iOS after selecting date
    setDate(currentDate);
  };

  const handleConfirm = () => {
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Publish Date:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <View style={styles.dateInputContainer}>
            <TextInput
              style={styles.dateInput}
              value={date.toLocaleDateString()}
              editable={false}
              placeholder="Select date"
              placeholderTextColor="#999999"
            />
            <MaterialIcons
              name="date-range"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <View>
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onChange}
            minimumDate={new Date()} // Allow selecting dates up to the current date
          />
          <Button title="Confirm" onPress={handleConfirm} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    width: '85%',
  },
  dateInput: {
    marginRight: '5%',
    width: '75%',
  },
  label:{
    fontSize:15,
    marginRight: '5%',
  }
});

export default DateSelector;