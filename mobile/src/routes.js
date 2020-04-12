import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//criando primeira navegação
const AppStack = createStackNavigator();

//importando as pages
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

//criando as rotas
export default function Routes() {
    return (
        // essencial colocar o NavigationContainer como 'tag principal', que fica por volta das rotas
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                {/* e para cada uma das rotas que for criada necessita de um <AppStack.Screen> */}
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>

    )
};