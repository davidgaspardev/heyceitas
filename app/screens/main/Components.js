import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';

/**
 * Functional Stateless Component
 * Does not return JSX
 */
const Header = ({children}) =>
React.createElement(

  // Name of view, in this is a Native View:
  View,

  // Property, in this case only has definite style:
  { style: styles.header },

  // Views children, in this case only has a View:
  React.createElement(

    // Name of view, in this case is a Native Text:
    Text,

    // Property, in this case only has defined style:
    { style: styles.headerTitle },

    // Views Children, in this case is a string:
    children
  )
);

/**
 * Functional Stateless Component
 * With return JSX.
 */
const FloatingButton = ({icon, event}) => (
  <TouchableOpacity onPress={ event } style={styles.floatingButton}>
    <Image source={icon} style={{ width: 20, height: 20}} />
  </TouchableOpacity>
);


/**
 * Object StyleSheet, using create method.
 * OBS: To be inserted into the style property of views.
 */
const styles = StyleSheet.create({
  header: {
    // Maximum width
    alignSelf: 'stretch',

    // Static height.
    height: 48,

    // Align the child views in the horizontal center.
    // OBS: To be horizontal the columnDirection has to be column, and to be vertical to be row.
    // OPTIONS: flex-start, flex-end and stretch.
    alignItems: 'center',

    // Align the child views in the vertical center.
    // OBS: To be vertical the columnDirection has to be column, and to be horizontal to be row.
    justifyContent: 'center'
  },
  headerTitle: {
    // Font size in dp/dip
    // OBS: dp/dip - Density-independent Pixels
    fontSize: 36,

    // Font family style
    fontFamily: 'umbrella',

    // Font color
    color: '#952115'
  },

  floatingButton: {
    // Position type.
    // Absolute position relative to the parent.
    position: 'absolute',

    // Position references
    right: 15,
    bottom: 15,

    // Statics width and height.
    width: 56,
    height: 56,

    // Other:
    elevation: 5,
    borderRadius: 28,
    zIndex:100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff3333'

  }
});

export { Header, FloatingButton };
