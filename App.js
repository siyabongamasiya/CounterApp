import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Presentation/Screens/HomeScreen/HomeScreen';
import SprintsScreen from './Presentation/Screens/SprintsScreen/SprintsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { primary, secondary } from './Presentation/Styles/ColorStyles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}} />
        <Stack.Screen name="Sprints" component={SprintsScreen} options={{headerTitle : "",headerStyle :{backgroundColor : primary}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondary,
    justifyContent: 'center',
  },
});
