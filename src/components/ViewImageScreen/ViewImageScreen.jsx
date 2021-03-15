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
                <MaterialCommunityIcons name='close' size={10}/>
                <MaterialCommunityIcons name='trash-can-outline' size={10}/>
            </View>
            <Image style={styles.image} source={require('../../../assets/chair.jpg')}/>
        </View>
    );
}

export default ViewImageScreen