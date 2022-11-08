import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ImageScreen from './src/screens/ImageScreen';
import GestureScreen from './src/screens/GestureScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='App_to_Home'
        screenOptions={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'orange' }
          }
        }>
        <Stack.Screen name="App_to_Home" component={HomeScreen} options={{
          title: 'Movie Time',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
          }
        }} />
        <Stack.Screen name="Home_to_Details" component={DetailScreen}
          options={({ route }) => ({ title: route.params.movie.title })} />
        <Stack.Screen name="Details_to_Details" component={DetailScreen}
          options={({ route }) => ({ title: route.params.movie.title })} />
        <Stack.Screen name="Details_to_Image" component={ImageScreen} />
        <Stack.Screen name="App_to_Gesture" component={GestureScreen} options={{
          title: 'Gesture Time',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
