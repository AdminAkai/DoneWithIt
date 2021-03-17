import * as yup from 'yup'

export default {
    name: yup.string().required().label('Name'),
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(4).label('Password'),
}