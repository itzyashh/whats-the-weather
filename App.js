import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Home from "./src/screens/Home/Home"
import { s } from "./App.style"
import { ImageBackground } from "react-native"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecast from "./src/screens/Forecast/Forecast";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });
  const Stack = createNativeStackNavigator();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={{colors: {background: 'transparent'}}}>
    <ImageBackground
      onLayout={onLayoutRootView}
      source={require("./assets/background.jpg")}
      imageStyle={s.img}
      style={s.img_background}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
        <Stack.Navigator screenOptions={{headerShown: false,animation:'slide_from_bottom',
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
    </NavigationContainer>
  )

}

export default App