import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='SingIn'
                component={SingIn}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name='SingUp'
                component={SingUp}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    );
}