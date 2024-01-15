import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Home from "./src/screens/Home/Home"
import { s } from "./App.style"
import { ImageBackground } from "react-native"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      onLayout={onLayoutRootView}
      source={require("./assets/background.jpg")}
      imageStyle={s.img}
      style={s.img_background}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  )

}

export default App