import React from 'react'
import { FlatList } from 'react-native'

import styles from './Styles'
import Screen from '../../components/Screen'
import ListingCard from '../../components/ListingCard'
import routes from '../../components/navigators/routes'

const ListingsScreen = ({ navigation }) => {

    const listings = [
        {
            id: 1,
            title: 'Red jacket for sale',
            price: 100,
            image: require('../../../assets/jacket.jpg')
        },
        {
            id: 2,
            title: 'Couch in great condition',
            price: 1000,
            image: require('../../../assets/couch.jpg')
        }
    ]

    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <ListingCard 
                        title={item.title}
                        subtitle={"$" + item.price}
                        image={item.image}
                        onPress={ () => navigation.navigate(routes.LISTING_DETAILS, item) }
                    />
                )}
            />
        </Screen>
    )
}

export default ListingsScreen
