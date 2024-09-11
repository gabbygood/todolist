import { FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { IconButton } from 'react-native-paper'
const dummyData = [
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
        <Text style={{ fontSize: 20, color: "white", fontWeight: 800 }}>{item.title}</Text>
        <IconButton icon="pencil" />
        <IconButton icon="trash-can" />
      </View>
    )
  }
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text style={{ marginTop: 50, marginLeft: 140 }}>TodoScreen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Add Task"
        keyboardType="default"
      />

      <TouchableOpacity style={{
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 8,
        marginVertical: 34,
        alignItems: "center"
      }}>
        <Text style={styles.text_one}>
          Add Text
        </Text>
      </TouchableOpacity>
      <FlatList data={dummyData} renderItem={renderTodos} />
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
    fontSize: 20
  },
})