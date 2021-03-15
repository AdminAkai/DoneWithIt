import React from 'react';
import { 
  View,
  Text
} from 'react-native';

import WelcomeScreen from './src/components/WelcomeScreen'
import ViewImageScreen from './src/components/ViewImageScreen'
import ListingCard from './src/components/ListingCard'

export default function App() {


  return (
    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100
    }}>
      <ListingCard 
        title='Red jacket for sale' 
        subtitle='$100' 
        image={require('./assets/jacket.jpg')}
      />
    </View>
    // <WelcomeScreen />
    // <ViewImageScreen />
  );

      

}
