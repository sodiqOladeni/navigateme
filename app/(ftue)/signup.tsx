import {View, Text, TextInput, Pressable, StyleSheet} from "react-native"
import {router} from "expo-router"
import { useState } from "react";
import { signup } from "@/utils/auth";


export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signupHandler = async () => {
    try{
      await signup(name, email, password)
    }catch(error){
      console.error(error)
    }
  }


    return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput placeholder="Full name" onChangeText={setName} style={styles.input}/>
      <TextInput placeholder="Email" onChangeText={setEmail}  style={styles.input}/>
      <TextInput placeholder="Password" onChangeText={setPassword}  secureTextEntry style={styles.input}/>

      <Pressable style={styles.button} onPress={signupHandler}>
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