import * as yup from 'yup'

export default {
    name: yup.string().required().label('Name'),
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(4).label('Password'),
    title: yup.string().required().min(1).label('Title'),
    price: yup.number().required().min(1).max(10000).label('Price'),
    category: yup.object({}).nullable(true),
    description: yup.string().notRequired(),
    images: yup.array().min(1, "Please select at least one image.")
}