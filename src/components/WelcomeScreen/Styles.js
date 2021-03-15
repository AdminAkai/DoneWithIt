import { 
    StyleSheet, 
    Platform, 
    StatusBar 
} from 'react-native'

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    tagline: {
        fontSize: 26,
        fontWeight: '700',
        marginTop: 10
    }
})

export default styles