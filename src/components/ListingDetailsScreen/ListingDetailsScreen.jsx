import React from 'react'
import { View, Image } from 'react-native'

import AppText from '../AppText'
import ListItem from '../ListItem'

import styles from './Styles'

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.imageStyles} source={require('../../../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>                
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../../../assets/mosh.jpg")}
                        title="Mosh Hamedani"
                        subtitle="5 listings"
                    />
                </View>

            </View>
        </View>    
    )
}

export default ListingDetailsScreen