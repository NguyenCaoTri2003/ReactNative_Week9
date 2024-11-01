import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen01 from './components/Screen01'
import Screen02 from './components/Screen02'
import Screen03 from './components/Screen03'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      
      <Stack.Navigator initialRouteName="Screen01"screenOptions={{
          headerStyle: {
            height: 30, 
          },
          headerTitleStyle: {
            fontSize: 15, 
          },
        }}> 
        <Stack.Screen name="Screen01" component={Screen01}  options={{title: 'Screen 01', headerShown: false }}/>
        <Stack.Screen name="Screen02" component={Screen02} options={{ title: 'Screen 02', headerShown: false}}/>
        <Stack.Screen name="Screen03" component={Screen03} options={{ title: 'Screen 03', headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
});
