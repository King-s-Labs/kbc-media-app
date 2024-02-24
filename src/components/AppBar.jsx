import * as React from 'react';
import { COLOURS } from '../constants'
import { Appbar } from 'react-native-paper'
import { StyleSheet } from 'react-native';

/**
 * App bar at the top of the screen.
 * Just for design purposes for now...
 * 
 * @param {string} title - The title of the page
 * @returns Rendered component
 */
const AppBar = ({ title }) => (
  <Appbar.Header style={styles.headerStyle}>
    <Appbar.Content title={title} titleStyle={{ color: "#FFF" }}/>
    <Appbar.Action icon="menu" color="#FFF" onPress={() => { }} />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLOURS.PRIMARY_COLOUR,
    color: '#fff',
  },

  menuStyle: {
    color: '#fff',
  }
})

export default AppBar;