import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar style="auto" />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> Hello, home screen</Text>
        <Link href="/Register">Register</Link>
        <Link href="/accounts">Accounts</Link>
      </View>
    </>
  );
}
