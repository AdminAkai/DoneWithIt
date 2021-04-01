import React from 'react'
import { View, FlatList } from 'react-native'

import Screen from '../../components/Screen'
import { ListItem, ListItemSeperator } from '../../components/lists'
import Icon from '../../components/Icon'
import styles from './Styles'
import defaultStyles from '../../config/styles'
import routes from '../../components/navigators/routes'

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: defaultStyles.colors.primary
        },
        targetScreen: routes.LISTINGS
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: defaultStyles.colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
]


const AccountScreen = ({ navigation }) => {
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
                            onPress={ () => navigation.navigate(item.targetScreen) }
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
