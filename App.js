import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Home from "./src/screens/Home/Home"
import { s } from "./App.style"
import { ImageBackground } from "react-native"

const App = () => {
  return (
    <ImageBackground
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