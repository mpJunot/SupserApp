import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export const ButtonPersonalized = ({name, action}) => {
  return (
      <TouchableOpacity style={style.button} onPress={action}>
        <Text>{name}</Text>
      </TouchableOpacity>
  )
}

const App = () => {
  const [text, onChangeText] = React.useState('Screen 1');
  const onPress = () => onChangeText(value => "Bonjour")
  return (
    <View style={style.container}>
        <Text style={style.texte}>
        {text}
        </Text>
        <TextInput style={style.input}

          placeholder="Entrez quelque chose"
          keyboardType="ascii-capable"
      />
      <ButtonPersonalized name={'buton'} action={onPress}/>
    </View>
  );
};

const style = StyleSheet.create({
  texte: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;