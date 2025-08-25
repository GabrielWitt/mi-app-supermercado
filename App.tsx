import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigator/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
