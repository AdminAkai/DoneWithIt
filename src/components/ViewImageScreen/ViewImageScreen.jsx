import React from 'react';
import {
    View,
    Image,
} from 'react-native'

import styles from './Styles'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer} >
                <MaterialCommunityIcons color='white' name='close' size={35}/>
                <MaterialCommunityIcons color='white' name='trash-can-outline' size={35}/>
            </View>
            <Image style={styles.image} source={require('../../../assets/chair.jpg')}/>
        </View>
    );
}

export default ViewImageScreen