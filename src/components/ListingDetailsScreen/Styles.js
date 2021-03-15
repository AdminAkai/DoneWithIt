import { StyleSheet } from 'react-native'
import colors from '../../../config/colors'

const styles = StyleSheet.create({
    test: {
        backgroundColor: 'white'
    },
    detailsContainer: {
        padding: 20,
    },
    userContainer: {
        marginVertical: 40
    },
    imageStyles: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    }
})

export default styles