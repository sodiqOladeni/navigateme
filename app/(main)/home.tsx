import {View, Text, Pressable} from "react-native"
import {auth} from "@/utils/auth"
import {router} from "expo-router"

export default function Home() {
    const handleLogout = () => {
        auth.logout();
        router.replace("/(ftue)/login");
    }
    return (
<View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#ecfeff"
    }}>
      <Text style={{ fontSize:30, fontWeight:"bold" }}>Home</Text>
      <Text style={{ marginTop:10 }}>You are logged in 🎉</Text>

      <Pressable
        onPress={handleLogout}
        style={{
          marginTop:30,
          backgroundColor:"#ef4444",
          padding:16,
          borderRadius:12
        }}>
        <Text style={{ color:"white", fontWeight:"600" }}>Logout</Text>
      </Pressable>
    </View>
    );
}