import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet} from 'react-native';
import DateSelector from './DateSelector';
import Dropdown from './Dropdown';
import PostTypeDropdown from './PostTypeDropdown';
import CheckBoxList from './CheckboxList';
import ImageUploader from './ImageUploader';

const Form = () => {
  const [formData, setFormData] = useState({
    postTitle: '',
    publishDate: new Date(),
    platform: null,
    caption: '',
    eventDetails:'',
    additionalDetails:'',
  });
  
  const handlePlatformChange = (newPlatform) => {
    setFormData({ ...formData, platform: newPlatform });
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };


  return (
        <View style={styles.container}>
          <Text style = {styles.text}>Post Title</Text>
          <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={formData.postTitle}
              onChangeText={(value) => handleInputChange('postTitle', value)}
          />

          <DateSelector/>

          <Dropdown platform={formData.platform} updatePlatform={handlePlatformChange} />

          <PostTypeDropdown/>
          <CheckBoxList/>


          
          <Text style = {styles.text}>Caption:</Text>
          <TextInput
              style={styles.captionInput}
              value={formData.caption}
              onChangeText={(value) => handleInputChange('caption', value)}
          />
          

          {/* <Text style = {styles.text}>Event Details:</Text>
          <TextInput
              style={styles.captionInput}
              value={formData.eventDetails}
              onChangeText={(value) => handleInputChange('eventDetails', value)}
          /> */}

          <Text style = {styles.text}>Add Assets: (optional):</Text>
          <ImageUploader/>
          
          <Text style = {styles.text}>Add style examples: (optional): </Text>
          <ImageUploader/>

          <Text style = {styles.text}>Additional Details: (optional)</Text>
          <TextInput
              style={styles.captionInput}
              value={formData.additionalDetails}
              onChangeText={(value) => handleInputChange('additionalDetails', value)}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    marginBottom: 5,
    fontSize: 15,
    marginRight: 10,
    marginTop: 5,
  },
  captionInput: {
    height: 70,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  

});

export default Form;