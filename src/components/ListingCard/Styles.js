import { StyleSheet } from 'react-native'

import colors from '../../../config/colors'

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    imageStyle: {
        width: '100%',
        height: 200
    },
    title: {
        marginBottom: 7
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})

export default styles