import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Register() {
  return (
    <View>
      <Text> Hello, register screen</Text>
      <Link href="/Register/expense">Register to expense</Link>
    </View>
  );
}
