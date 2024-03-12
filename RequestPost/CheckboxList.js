import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CheckBoxList = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Post', checked: false },
        { id: 2, text: 'Reel', checked: false },
        { id: 3, text: 'Story', checked: false },
      ]);
    
      const handleToggleCheck = (id) => {
        const updatedItems = items.map(item => {
          if (item.id === id) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
        setItems(updatedItems);
      };
    
      return (
        <View style={styles.container}>
            <Text>Select Instagram post format(s)</Text>
            <View style={styles.checkListContainer}>
            {items.map(item => (
                <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() => handleToggleCheck(item.id)}
                >
                    <View style={styles.checkBox}>
                        {item.checked && <AntDesign name="check" size={15} color="black" />} 
                    </View>
                    <Text style={styles.itemText}>{item.text}</Text>
                </TouchableOpacity>
                
            ))}
            </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container:{
            paddingTop: '5%',
            paddingBottom:'5%',
        },
      checkListContainer: {
        justifyContent: 'center',
        paddingTop: '2%'
      },
      checkBox: {
        width: 15,
        height: 15,
        borderRadius: 4,
        borderWidth: 1,
        marginRight: 10,
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      itemText: {
        marginRight: 10,
      },
    });

export default CheckBoxList;