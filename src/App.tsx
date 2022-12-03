import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "styled-components";
import theme from "./global/styles/theme";

import { HomeScreen } from "./screens/Home";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    "Gotham-Black-Regular": require("../assets/fonts/Gotham_Black_Regular.ttf"),
    "Gotham-Book-Regular": require("../assets/fonts/Gotham_Book_Regular.otf"),
    "Gotham-Medium-Regular": require("../assets/fonts/Gotham_Medium_Regular.ttf")
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


export default registerRootComponent(App);