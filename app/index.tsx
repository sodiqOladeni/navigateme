import { useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { auth } from "@/utils/auth";
import { router } from "expo-router";

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      if(auth.isLoggedIn()){
        router.push("/(main)/home")
      }else {
        router.replace("/(ftue)/login")
      }
    }, 1500)
  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#0f172a",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text style={{
        color: "white",
        fontSize: 32,
        fontWeight: "bold"
      }}>
        MyApp
      </Text>

      <ActivityIndicator color="white" style={{ marginTop: 20 }} />
    </View>
  );
}
