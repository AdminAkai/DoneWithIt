import React from 'react'
import { Image } from 'react-native'
import * as yup from 'yup'

import styles from './Styles'
import validationDefaults from '../../../config/validationDefaults'

import {
    AppForm,
    AppFormField,
    SubmitButton
} from '../../components/forms'
import Screen from '../../components/Screen'

const validationSchema = yup.object().shape({
    email: validationDefaults.email,
    password: validationDefaults.password
})

const LoginScreen = () => {

    return (
        <Screen style={styles.container}>
            <Image 
                source={require('../../../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={ values => console.log(values) }
                validationSchema={validationSchema}
            >
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                />
                <SubmitButton title="Login"/>
            </AppForm>
        </Screen>
    )
}

export default LoginScreen
