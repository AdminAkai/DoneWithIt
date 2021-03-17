import { StyleSheet } from 'react-native'

import defaultStyles from '../../../../config/styles'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: defaultStyles.colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500'
    },
    subtitle: {
        color: defaultStyles.colors.medium
    }
})

export default styles