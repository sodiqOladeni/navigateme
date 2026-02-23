import {View, Text, TextInput, Pressable, StyleSheet} from "react-native"
import {router} from "expo-router"

export default function ForgotPassword(){
    return (
        <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <TextInput placeholder="Enter your email" style={styles.input}/>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:"center",padding:24,backgroundColor:"#f8fafc"},
  title:{fontSize:28,fontWeight:"bold",marginBottom:20},
  input:{backgroundColor:"white",padding:14,borderRadius:10,marginBottom:12},
  button:{backgroundColor:"#f59e0b",padding:16,borderRadius:12},
  buttonText:{color:"white",textAlign:"center",fontWeight:"600"}
})