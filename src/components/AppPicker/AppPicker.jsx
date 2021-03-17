import React, { useState } from 'react'
import { View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './Styles'
import defaultStyles from '../../../config/styles'
import AppText from '../AppText'
import PickerItem from '../PickerItem'

const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Button title='Close' onPress={() => setModalVisible(false)}/>
                <FlatList 
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => 
                    <PickerItem 
                    label={item.label}
                    onPress={() => {
                        setModalVisible(false)
                        onSelectItem(item)
                    }}
                    />}
                />
            </Modal>
        </>
    )
}

export default AppPicker