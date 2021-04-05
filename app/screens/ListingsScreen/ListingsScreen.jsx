import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import AppButton from '../../components/AppButton'
import ListingCard from '../../components/ListingCard'
import listingsApi from '../../api/listings'
import routes from '../../components/navigators/routes'
import Screen from '../../components/Screen'
import styles from './Styles'
import AppText from '../../components/AppText'

const ListingsScreen = ({ navigation }) => {

    const [listings, setListings] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadListings()
    }, [listings])   
    
    const loadListings = async () => {
        setLoading(true)
        const response = await listingsApi.getListings()
        setLoading(false)

        setListings(response.data)
    }
 
    return (
        <Screen style={styles.screen}>
            {(listings.length == 0 || listings == null) && 
                <>
                    <AppText>Couldn't retrieve listings.</AppText>
                    <AppButton title='Retry' onPress={loadListings}/>
                </>
            }
            <AppText>{console.log(listings)}</AppText>
            <ActivityIndicator animating={loading} size='large'/>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <ListingCard 
                        title={item.title}
                        subtitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={ () => navigation.navigate(routes.LISTING_DETAILS, item) }
                    />
                )}
            />
        </Screen>
    )
}

export default ListingsScreen
