import React, { useEffect } from 'react'
import { View, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import styles from './Styles'
import defaultStyles from '../../../config/styles'

const ImageInput = ({ imageUri, onChangeImage }) => {

    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        console.log(granted)
        if (!granted) {
          alert('You need to enable permission to access the library')
        }
    }

    const handlePress = () => {
        if (!imageUri) {
            selectImage()
        } else {
            Alert.alert(
                'Delete', 
                'Are you sure you want to delete this image?', 
                [
                    { text: 'Yes', onPress: () => onChangeImage(null) },
                    { text: 'No' }
                ]
            )
        }
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          })
          if (!result.cancelled) {
            onChangeImage(result.uri)
          }
        } catch (error) {
          console.log('Error reading an image')
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                { !imageUri && <MaterialCommunityIcons name='camera' color={defaultStyles.colors.medium} size={40} /> }
                { imageUri && <Image source={{ uri: imageUri }} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput