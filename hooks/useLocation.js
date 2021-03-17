import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'


export default useLocation = () => {
    try{
        const [location, setLocation] = useState()
    
        const getLocation = async () => {
          const { granted } = await Location.requestPermissionsAsync()
          if (!granted) return
          const { coords:  latitude, longitude } = await Location.getLastKnownPositionAsync()
          setLocation({ latitude, longitude })
      
        }
      
        useEffect(() => {
          getLocation()
        }, [])
    
        return location
    } catch(error) {
        
    }
}
