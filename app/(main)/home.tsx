import {View, Text, Pressable, StyleSheet, Modal, TextInput, KeyboardAvoidingView, FlatList} from "react-native"
import {auth} from "@/utils/auth"
import {router} from "expo-router"
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context"
import { useState, useEffect } from "react"

import { createOrMigrateDbIfNeeded } from "../database/db";
import { addTodo, listTodos } from "../repository/todos";

type Todo = {
  id: number,
  title: string,
  created_at: number
}

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [input, setInput] = useState("")
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true)

  const [todos, setTodos] = useState<Todo[]>([])

   useEffect(() => {
  (async () => {
    await createOrMigrateDbIfNeeded();
    await refresh();
    setLoading(false);
  })();
}, []);

async function refresh() {
  const data = await listTodos();
  setTodos(data);
}

  const saveTodo = async () => {
    const trimmedTitle = input.trim()
    if(!input.trim()) return;

    addTodo(trimmedTitle)
    setInput("")
    setVisible(false)

    await refresh()
  }

    return (
<SafeAreaView style={{flex: 1, backgroundColor: "#f1f5f9"}} edges={["top"]}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Todos</Text>

        <Pressable style={styles.addButton} onPress={() => {setVisible(true)}}>
          <Text style={{color: "white", fontSize: 22}}>+</Text>
        </Pressable>
      </View>

      <FlatList data={todos}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 20 + insets.bottom
      }}
      renderItem={({item}) => (
        <View style={styles.todoCard}>
          
          <Text style={{fontSize: 16}}>{item.title}</Text>
        </View>
      )}
      />
  
  <Modal visible={visible} transparent animationType="fade">

    <Pressable style={styles.overlay} onPress={() => setVisible(false)}/>
    <KeyboardAvoidingView behavior="padding" style={styles.sheetContainer}>
      <View style={[styles.bottomSheet, {paddingBottom: 16 + insets.bottom}]}>
      <Text style={styles.sheetTitle}>Add New Todo</Text>
      <TextInput placeholder="Enter Todo..." value={input} 
        onChangeText={setInput} style={styles.input} autoFocus/>
        <Pressable style={styles.saveButton} onPress={saveTodo}>
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
    </View>
    </KeyboardAvoidingView>
    
  </Modal>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800"
  },
  addButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomSheet: {
    backgroundColor: "white",
    padding: 20,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 15
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 14,
    borderRadius: 12,
    marginBottom: 20
  }, 
  saveButton: {
    backgroundColor: "#10b981",
    padding: 16,
    borderRadius: 12,
    alignItems: "center"
  },
  saveText: {
    color: "white",
    fontWeight: "600"
  },
  sheetContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  todoCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000066" 
  }
})