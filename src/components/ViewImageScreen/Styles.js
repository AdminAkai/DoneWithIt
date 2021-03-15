import {
    StyleSheet,
    Platform, 
    StatusBar
} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: StatusBar.currentHeight + 50,
        backgroundColor: 'black'
    },
    iconContainer: {
        width: '100%',
        height: '50%',
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingLeft: 40,
        paddingRight: 40
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
})

export default styles