import React from 'react'

import styles from './Styles'
import AppText from '../../AppText'

const ErrorMessage = ({ error, visible }) => {
    
    if (!visible || !error) return null
    
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

export default ErrorMessage
