import React from 'react'
import { View, FlatList } from 'react-native'

import Screen from '../Screen'
import ListItem from '../ListItem'
import Icon from '../Icon'
import ListItemSeperator from '../ListItemSeperator'
import styles from './Styles'
import colors from '../../../config/colors'

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]


const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Mosh Hamedani"
                    subtitle="programmingwithmosh@gmail.com"
                    image={require('../../../assets/mosh.jpg')}
                />  
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem 
                            title={item.title}
                            IconCommponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem 
                title='Log Out'
                IconCommponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
        </Screen>

    )
}

export default AccountScreen
