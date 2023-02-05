import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import Home from '../pages/Home';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

export default function Routes(){

    const AppStack = createNativeStackNavigator();

    return(
        <AppStack.Navigator>
            <AppStack.Screen
                name='Login'
                component={SingIn}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='Cadastro'
                component={SingUp}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='Inicio'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    )
}
