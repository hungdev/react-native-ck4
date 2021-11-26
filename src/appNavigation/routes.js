import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Login from './src/screens/Login'
import ProductList from '../screens/ProductList'
import ProductDetail from '../screens/ProductDetail'
import Shop from '../screens/Shop'
import Bag from '../screens/Bag'
import Wishlist from '../screens/Wishlist'
import Account from '../screens/Account'

const customHeader = () => (
  <View style={{ height: 50, backgroundColor: 'grey' }}>
    <Text>aaaaa</Text>
  </View>
)

export default function App() {

  const HomeStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="ProductList" component={ProductList}
          options={{
            header: () => (
              <View style={{ height: 50, backgroundColor: 'grey' }}>
                <Text>aaaaa</Text>
              </View>
            )
          }}
        />
        <HomeStack.Screen name="ProductDetail" component={ProductDetail} />
      </HomeStack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Tab.Navigator
        // tabBarOptions={{
        //   keyboardHidesTabBar: true, v5
        // }}
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true, // v6
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Wishlist') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Bag') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Wishlist" component={Wishlist} />
        <Tab.Screen name="Discover" component={HomeStackScreen} />
        <Tab.Screen name="Shop" component={Shop} />
        <Tab.Screen name="Bag" component={Bag} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
