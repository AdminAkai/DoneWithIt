import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'

import ImageInput from '../ImageInput'

import styles from './Styles'

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    
    const scrollView = useRef()

    return (
        <View>
            <ScrollView 
                ref={scrollView} 
                horizontal 
                onContentSizeChange={ () => 
                    scrollView.current.scrollToEnd() 
                } 
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.container}>
                        { imageUris.map(uri => 
                            <View style={styles.image}>
                                <ImageInput 
                                    imageUri={uri} 
                                    key={uri} 
                                    onChangeImage={ () => onRemoveImage(uri) } 
                                />
                            </View>
                        )}
                    <ImageInput onChangeImage={ uri => onAddImage(uri) }/>
                </View>
            </ScrollView>
        </View>
    )
}

export default ImageInputList
