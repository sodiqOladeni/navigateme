import {View, Text, TextInput, Pressable, StyleSheet} from "react-native"
import {router} from "expo-router"
export default function Signup() {
    return (
<View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput placeholder="Full name" style={styles.input}/>
      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Password" secureTextEntry style={styles.input}/>

      <Pressable style={styles.button} onPress={() => router.replace("/(ftue)/login")}>
        <Text style={styles.buttonText}>Sign up</Text>
      </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:"center",padding:24,backgroundColor:"#f8fafc"},
  title:{fontSize:28,fontWeight:"bold",marginBottom:20},
  input:{backgroundColor:"white",padding:14,borderRadius:10,marginBottom:12},
  button:{backgroundColor:"#10b981",padding:16,borderRadius:12},
  buttonText:{color:"white",textAlign:"center",fontWeight:"600"}
});