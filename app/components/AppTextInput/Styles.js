import { StyleSheet } from 'react-native'

import defaultStyles from '../../../config/styles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }
})

export default styles