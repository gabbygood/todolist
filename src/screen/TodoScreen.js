import { StyleSheet, Text, TextInput, View } from 'react-native'


const TodoScreen = () => {
  return (
    <View style={{margin: 16}}>
      <Text>TodoScreen</Text>
      <TextInput style={{borderWidth: 2, borderColor: "#303236", }}/>
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})