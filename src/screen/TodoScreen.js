import { FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { IconButton } from 'react-native-paper'
const tempData = [
  {
    id: "01",
    title: "Wash Car"
  },
  {
    id: "02",
    title: "Read a Book"
  }
]



const TodoScreen = () => {

  const [number, onChangeNumber] = React.useState('');
  const [todo, setTodo] = useState("")
  const [editedTodo, setEditedTodo] = useState(null)

  const renderTodos = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: "blue",
        marginTop: 10,
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: 800, flex: 1 }}>{item.title}</Text>
        <IconButton icon="pencil" iconColor='#8cf9ff' onPress={() => handleEditTodo(item)} />
        <IconButton icon="trash-can" iconColor='red' onPress={() => handleDeleteTodo(item.id)} />
      </View>
    )
  }
  const [todoList, setTodoList] = useState([])

  const handleAddTodo = () => {
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
    setTodo("")
  }
  const handleDeleteTodo = (id) => {
    const updateTodoList = todoList.filter((todo) => { todoList.id !== id })

    setTodoList(updateTodoList)
  }
  const handleEditTodo = (todo) => {
    setEditedTodo(todo)
    setTodo(todo.title)
  }
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo }
      }
      return item
    })
    setTodoList(updatedTodos)
    setEditedTodo(null)
    setTodo("")
  }
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text style={styles.todoApp}>Todo App</Text>
      <TextInput
        style={styles.input}
        onChangeText={(userText) => setTodo(userText)}
        value={todo}
        placeholder="Add Task"
        keyboardType="default"
      />

      {editedTodo ? <TouchableOpacity onPress={() => handleUpdateTodo()} style={{
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 8,
        marginVertical: 34,
        alignItems: "center"
      }}>
        <Text style={styles.text_one}>
          Update Task
        </Text>
      </TouchableOpacity> :
        (<TouchableOpacity onPress={() => handleAddTodo()} style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 8,
          marginVertical: 34,
          alignItems: "center"
        }}>
          <Text style={styles.text_one}>
            Add Task
          </Text>
        </TouchableOpacity>)
      }
      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  text_one: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    paddingVertical: 8,
    width: 345
  },
  todoApp: {
    fontFamily: "Playwrite-CU",
    marginTop: 50,
    marginLeft: 100,
    fontSize: 40
  }
})