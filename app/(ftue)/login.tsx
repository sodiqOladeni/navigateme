import {View, Text, TextInput, Pressable, StyleSheet} from "react-native"
import {router} from "expo-router"
import {auth} from "@/utils/auth"

export default function Login() {
    const handleLogin = () => {
        // backend calls
        auth.login()
        router.replace("/(main)/home")
    }
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Password" secureTextEntry style={styles.input}/>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(ftue)/forgot-password")
        }>
        <Text style={styles.link}>Forgot Password?</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(ftue)/signup")
        }>
        <Text style={styles.link}>Create account</Text>
      </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container: { flex:1, justifyContent:"center", padding:24, backgroundColor:"#f8fafc" },
  title: { fontSize:28, fontWeight:"bold", marginBottom:20 },
  input: { backgroundColor:"white", padding:14, borderRadius:10, marginBottom:12 },
  button: { backgroundColor:"#2563eb", padding:16, borderRadius:12, marginTop:10 },
  buttonText: { color:"white", textAlign:"center", fontWeight:"600" },
  link: { marginTop:14, textAlign:"center", color:"#2563eb" }
})