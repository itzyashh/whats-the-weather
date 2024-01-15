import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "../App";


const Stack = createNativeStackNavigator();

const Stacknavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}