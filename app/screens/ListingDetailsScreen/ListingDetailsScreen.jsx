import React from 'react'
import { View, Image } from 'react-native'

import AppText from '../../components/AppText'
import { ListItem } from '../../components/lists'

import styles from './Styles'

const ListingDetailsScreen = ({ route }) => {

    const listing = route.params

    return (
        <View>
            <Image style={styles.imageStyles} source={{ uri: listing.images[0].url }} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>                
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../../assets/mosh.jpg")}
                        title="Mosh Hamedani"
                        subtitle="5 listings"
                    />
                </View>

            </View>
        </View>    
    )
}

export default ListingDetailsScreen