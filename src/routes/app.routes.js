import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import Home from '../pages/Home';

export default function AppRoutes(){

    const AppStack = createNativeStackNavigator();

    return(
        <AppStack.Navigator>
            <AppStack.Screen
                name='Home'
                component={Home}
            />
        </AppStack.Navigator>
    )
}
