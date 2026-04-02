import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { OTPWidget } from '@msg91comm/sendotp-react-native';
import { MSG91_WIDGET_ID, MSG91_TOKEN_AUTH } from './src/config/constants';

// The root of the app, which renders the main navigator.
// The AppNavigator will handle which screen to show based on auth state.
export default function App() {
  useEffect(() => {
    OTPWidget.initializeWidget(MSG91_WIDGET_ID, MSG91_TOKEN_AUTH); //Widget initialization
    console.log('MSG91 Widget Initialized');
  }, []);

  return <AppNavigator />;
}