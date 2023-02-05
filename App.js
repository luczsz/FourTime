import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AuthProvider from './src/contexts/auth';

import { NavigationContainer } from '@react-navigation/native';

import api from './src/services/api';
import Home from './src/pages/Home';
import SingIn from './src/pages/SingIn';

import Routes from './src/routes';

export default function App() {

  return (

    <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: '#131313'}}>
          <StatusBar backgroundColor='#131313' style='light'/>
          <Routes />
        </View>

    </NavigationContainer>
  );
}
