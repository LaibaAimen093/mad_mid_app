import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome5 } from '@expo/vector-icons'; // Import icons from expo/vector-icons

import AdminSc from './AdminSc';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import Sc1 from './Sc1';
import Home from './Home';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    // Set icons based on route name
                    if (route.name === 'Admin') {
                        iconName = 'crown';
                    } else if (route.name === 'Sc1') {
                        iconName = 'list';
                    } else if (route.name === 'Login') {
                        iconName = 'sign-in-alt';
                    } else if (route.name === 'Signup') {
                        iconName = 'user-plus';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    } else if (route.name === 'Home') {
                        iconName = 'home';
                    }

                    // Return the icon component
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue', // Color of the active tab
                inactiveTintColor: 'gray', // Color of the inactive tab
                style: {
                    backgroundColor: 'white', // Background color of the tab bar
                    borderTopWidth: 0, // Remove top border
                    height: 80, // Set the height of the tab bar
                },
                labelStyle: {
                    fontSize: 14, // Font size of tab labels
                    marginBottom: 5, // Adjust label spacing from icon
                },
                tabStyle: {
                    justifyContent: 'center', // Align items in the center vertically
                },
                showLabel: false, // Hide the tab labels
            }}
        >
            <Tab.Screen name="Admin" component={AdminSc} options={{ tabBarLabel: 'Admin' }} />
            <Tab.Screen name="Sc1" component={Sc1} options={{ tabBarLabel: 'Sc1' }} />
            {/* <Tab.Screen name="Login" component={Login} options={{ tabBarLabel: 'Login' }} /> */}
            {/* <Tab.Screen name="Signup" component={SignUp} options={{ tabBarLabel: 'Signup' }} /> */}
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
        </Tab.Navigator>
    );
}

export default function AppDT(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Menu" component={BottomTabNavigator}/>
                <Drawer.Screen name="Admin" component={BottomTabNavigator}/>
                <Drawer.Screen name="Profile" component={BottomTabNavigator}/>
                <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
