import { StyleSheet, Platform } from 'react-native'

import colors from '../../../config/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avenir'
    },
    icon: {
        marginRight: 10
    }
})

export default styles