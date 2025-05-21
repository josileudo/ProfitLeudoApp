import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ThemeProvider } from "@shopify/restyle";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import theme from "../config/theme";

export default function RootLayout() {
  const tabPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="(Home)"
          listeners={() => ({ tabPress })}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="account-tree" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Register"
          listeners={() => ({ tabPress })}
          options={{
            title: "Register",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome6 name="add" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="accounts"
          listeners={() => ({ tabPress })}
          options={{
            title: "Accounts",
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons
                name="account-balance-wallet"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
