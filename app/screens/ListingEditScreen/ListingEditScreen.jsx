import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import * as Location from 'expo-location'

import { AppForm, AppFormField, AppFormPicker, SubmitButton, AppFormImagePicker } from '../../components/forms'
import Screen from '../../components/Screen'

import styles from './Styles'
import validationDefaults from '../../config/validationDefaults'
import CategoryPickerItem from '../../components/CategoryPickerItem'
import useLocation from '../../hooks/useLocation'

const initialFormValues = {
    title: '',
    price: '',
    category: null,
    description: '',
    images: []
}

const validationSchema = yup.object().shape({
    title: validationDefaults.title,
    price: validationDefaults.price,
    category: validationDefaults.category,
    description: validationDefaults.description,
    images: validationDefaults.images
})

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];
  

const ListingEditScreen = () => {

  const location = useLocation()

    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={initialFormValues}
                onSubmit={ values => console.log(location) }
                validationSchema={validationSchema}
            >
                <AppFormImagePicker name="images"/>
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
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
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
