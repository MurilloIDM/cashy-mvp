import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccessContext, IValueAccessContext } from "./context/AccessContext";

import { HomeScreen } from "./screens/Home";
import { LoginScreen } from "./screens/Login";
import { SelectAvatarScreen } from "./screens/SelectAvatar";
import { TutorialScreen } from "./screens/Tutorial";

import theme from "./global/styles/theme";
import { ThemeProvider } from "styled-components";
import { DashboardScreen } from "./screens/Dashboard";


const Stack = createNativeStackNavigator();

export function App() {
  const { user, updateValueUser } = React.useContext<IValueAccessContext>(AccessContext);

  const [fontsLoaded] = useFonts({
    "Gotham-Black-Regular": require("../assets/fonts/Gotham_Black_Regular.ttf"),
    "Gotham-Book-Regular": require("../assets/fonts/Gotham_Book_Regular.otf"),
    "Gotham-Medium-Regular": require("../assets/fonts/Gotham_Medium_Regular.ttf")
  });

  React.useEffect(() => {
    (async () => await updateValueUser())();
  }, []);

  React.useEffect(() => {
    (async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const hasFullName = !!user?.fullname;
  const hasAvatarId = !!user?.avatarId;
  const hasLessons = user?.lessonsCode?.length > 0;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!hasFullName && (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
              />
    
              <Stack.Screen
                name="Login"
                component={LoginScreen}
              />
            </>
          )}

          {!hasAvatarId && (
            <>
              <Stack.Screen
                name="SelectAvatar"
                component={SelectAvatarScreen}
              />
            </>
          )}

          {(!hasLessons && (
            <>
              <Stack.Screen
                name="Tutorial"
                component={TutorialScreen}
              />
            </>
          ))}


          {(hasFullName && hasAvatarId && hasLessons) && (
            <>
              <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
              />
            </>
          )}



        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
