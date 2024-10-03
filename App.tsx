import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import ThemeButton from "./components/ThemeButton";

export default function App() {
  const [contador, setContador] = useState<number>(0);
  const [list, setList] = useState<string[]>([]);
  console.log('List', list);

  const aumentar = () => {
    const nuevoNumero = contador + 1;
    setContador(nuevoNumero);
    setList([...list, nuevoNumero.toString()])
  };

  const resetear = () => {
    setContador(0);
    setList([...list, 'Reset']);
  };

  const renderButtons = () => {
    return <>
      <ThemeButton label={'+1'} onPress={aumentar} onLongPress={resetear} />

      <ThemeButton label={'Reset'} onPress={resetear} position={"left"} />
    </>
  };

  const renderItem = ({ item } : { item: any}) => {
    return <Text style={styles.item}>{item}</Text>
  };

  const renderListCommands = () => {
    return <View style={styles.listCommands}>
      <FlatList data={list} renderItem={renderItem} />
      <Pressable onPress={() => setList([])} style={styles.resetCommansButtons}><Text>Reset</Text></Pressable>
    </View>;
  };

  const renderContador =  () => {
    return <View style={styles.contador}>
      <Text style={styles.text} >{contador}</Text>
      {renderButtons()}
    </View>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderListCommands()}
      {renderContador()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contador:{
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black', fontSize: 55
  },
  listCommands: {
    width: '100%',
    height: '30%',
    backgroundColor: '#424040'
  },
  item: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  resetCommansButtons: {
    backgroundColor: 'red',
    width: 40,
    position: 'absolute',
    right: 30,
    bottom: 10,
  }
});
