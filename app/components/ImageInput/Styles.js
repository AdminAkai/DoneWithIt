import { StyleSheet } from 'react-native'

import defaultStyles from '../../../config/styles'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        width: 100,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default styles