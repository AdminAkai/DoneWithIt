import React from 'react'
import { 
    ImageBackground, 
    View, 
    Image, 
    Text, 
} from 'react-native'

import styles from './Styles'
import routes from '../../components/navigators/routes'

import AppButton from '../../components/AppButton'

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground blurRadius={1} style={styles.backgroundImage} source={require('../../../assets/background.jpg')}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assets/logo-red.png')}/>
                    <Text style={styles.tagline}>Sell What You Don't Need</Text>
                </View>
                <View style={styles.loginContainer}>
                    <AppButton title={'login'} onPress={ () => navigation.navigate(routes.LOGIN) } color={'primary'}/>
                    <AppButton title={'register'} onPress={ () => navigation.navigate(routes.REGISTER) } color={'secondary'}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen