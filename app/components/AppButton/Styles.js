import { StyleSheet } from 'react-native'

import defaultStyles from '../../config/styles'


const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        color: defaultStyles.colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default styles