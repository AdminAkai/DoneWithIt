import React, { useState } from 'react'
import { FlatList } from 'react-native'

import { ListItem, ListItemSeperator, ListItemDeleteAction } from '../../components/lists'
import Screen from '../../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'Person',
        description: 'Hey is this still available?',
        image: require('../../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Person',
        description: 'Im interested in this item',
        image: require('../../assets/mosh.jpg')
    }
]

const MessagesScreen = () => {
    
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log('message selected', item)}
                        renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                        }
                        showChevrons={true}
                    />
                }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'Person',
                            description: 'Im interested in this item',
                            image: require('../../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    )
}

export default MessagesScreen