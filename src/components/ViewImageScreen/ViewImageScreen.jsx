import React from 'react';
import {
    View,
    Image,
} from 'react-native'
import styles from './Styles'


const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer} >
                <View style={styles.closeIcon}/>
                <View style={styles.deleteIcon}/>
            </View>
            <Image style={styles.image} source={require('../../../assets/chair.jpg')}/>
        </View>
    );
}

export default ViewImageScreen