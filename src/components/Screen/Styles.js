import { 
    StyleSheet,
} from 'react-native'
import Constants from 'expo-constants'

import colors from '../../../config/colors'

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})

export default styles