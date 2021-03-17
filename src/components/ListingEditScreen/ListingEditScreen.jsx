import React from 'react'
import * as yup from 'yup'

import { AppForm, AppFormField, AppFormPicker, SubmitButton} from '../forms'
import Screen from '../Screen'

import styles from './Styles'
import validationDefaults from '../../../config/validationDefaults'

const initialFormValues = {
    title: '',
    price: '',
    category: null,
    description: ''
}

const validationSchema = yup.object().shape({
    title: validationDefaults.title,
    price: validationDefaults.price,
    category: validationDefaults.category,
    description: validationDefaults.description
})

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Camera', value: 3 }
]

const ListingEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={initialFormValues}
                onSubmit={ values => console.log(values) }
                validationSchema={validationSchema}
            >
                <AppFormField 
                    maxLength={255}
                    autoCapitalize='none'
                    autoCorrect={false}
                    name='title'
                    placeholder='Title'
                />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                    width={120}
                />
                <AppFormPicker 
                    items={categories}
                    name='category'
                    placeholder='Category'
                    width='50%'
                />
                <AppFormField 
                    maxLength={255}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline
                    numberOfLines={3}
                    name='description'
                    placeholder='Description'
                />
                <SubmitButton title='Post'/>
            </AppForm>
        </Screen>
    )
}

export default ListingEditScreen
