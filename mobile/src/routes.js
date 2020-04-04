import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

const AppStack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="incidents" component = {Incidents}/>
                <AppStack.Screen name="detail" component = {Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}