import React from 'react'

import { View, Image, TouchableWithoutFeedback } from 'react-native'

import AppText from '../AppText'

import styles from './Styles'

const ListingCard = ({ title, subtitle, imageUrl, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.imageStyle} source={{ uri: imageUrl }}/>
                <View style={styles.detailsContainer}>
                    <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                    <AppText numberOfLines={2} style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListingCard