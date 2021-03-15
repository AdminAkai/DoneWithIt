import React from 'react'
import { 
    ImageBackground, 
    View, 
    Image, 
    Text, 
} from 'react-native'

import styles from './Styles'

import LoginRegisterButton from '../LoginRegisterButton'

const WelcomeScreen = () => {
    return (
        <ImageBackground blurRadius={1} style={styles.backgroundImage} source={require('../../../assets/background.jpg')}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assets/logo-red.png')}/>
                    <Text style={styles.tagline}>Sell What You Don't Need</Text>
                </View>
                <View style={styles.loginContainer}>
                    <LoginRegisterButton buttonType={'login'}/>
                    <LoginRegisterButton buttonType={'register'}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen