import React from 'react'
import * as yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from '../../components/forms'
import Screen from '../../components/Screen'

import styles from './Styles'
import validationDefaults from '../../config/validationDefaults'

const initialFormValues = {
    name: '',
    email: '',
    password: ''
}

const validationSchema = yup.object().shape({
    name: validationDefaults.name,
    email: validationDefaults.email,
    password: validationDefaults.password
})

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={initialFormValues}
                onSubmit={ values => console.log(values) }
                validationSchema={validationSchema}
            >
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    placeholder='Name'
                />
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                />
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                />
                <SubmitButton title='Register'/>
            </AppForm>
        </Screen>
    )
}

export default RegisterScreen
