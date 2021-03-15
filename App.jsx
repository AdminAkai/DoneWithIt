import React from 'react';
import { 
  View,
  Text
} from 'react-native';

import WelcomeScreen from './src/components/WelcomeScreen'
import ViewImageScreen from './src/components/ViewImageScreen'
import ListingCard from './src/components/ListingCard'
import ListingDetailsScreen from './src/components/ListingDetailsScreen'

export default function App() {


  return (
    <ViewImageScreen />
  );

      

}


  // <WelcomeScreen />
  // <ViewImageScreen />
  //   <ListingCard 
  //   title='Red jacket for sale' 
  //   subtitle='$100' 
  //   image={require('./assets/jacket.jpg')}
  // />
  // <ListingDetailsScreen />
