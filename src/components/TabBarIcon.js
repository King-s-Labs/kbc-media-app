import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

/**
 * TabBarIcon is a component that renders an icon for the tab bar.
 * Otherwise, it renders a FontAwesome5 icon.
 */
export default function TabBarIcon({ name, color, size, animation, onPress, navigation }) {

    return <FontAwesome5 name={name} color={color} size={size} solid />;

}

/**
 * These are the PropTypes for the TabBarIcon component. 
 * They serve as a type checking mechanism for the props the component receives.
*/
TabBarIcon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    animation: PropTypes.instanceOf(Animated.Value),
    onPress: PropTypes.func,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }),
};