import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

function MaisVotado(list){
  return Math.max.apply(Math, list);
}
function MenosVotado(list){
  return Math.min.apply(Math, list);
}

function QualCidadeMaisVotada(city1, city2, city3, city4, array){
   const x = MaisVotado(array);
   if( x === city1){
     return "Fortaleza";
   }else if( x === city2){
     return "Limoeiro";
   }else if( x === city3){
     return "Quixada";
   }else return "Juazeiro do Norte";
}

function QualCidadeMenosVotada(city1, city2, city3, city4, array){
   const x = MenosVotado(array);
   if( x === city1){
     return "Fortaleza";
   }else if( x === city2){
     return "Limoeiro";
   }else if( x === city3){
     return "Quixada";
   }else return "Juazeiro do Norte";
}

function Contador(){
  const[contador, setContador] = useState(0);
  //const onPress = () => setContador(prevCount => prevCount + 1);

  function AdicionarContador(){
    setContador( contador + 1);
  }

  return contador;

}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  /*return (
    <View style={styles.screenContainer}>

      <AppButton onClick = {Contador} title="Fortaleza" size="sm" backgroundColor="#007bff" />
  */
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  const [count2, setCount2] = useState(0);
  const onPress2 = () => setCount2(prevCount2 => prevCount2 + 1);

  const [count3, setCount3] = useState(0);
  const onPress3 = () => setCount3(prevCount3 => prevCount3 + 1);

  const [count4, setCount4] = useState(0);
  const onPress4 = () => setCount4(prevCount4 => prevCount4 + 1);

  const list = [count, count2, count3, count4];




  return (
    <View style={styles.screenContainer}>

      <TouchableOpacity style={styles.appButtonContainer} onPress={onPress}>
        <Text style={styles.appButtonText}>Fortaleza</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text>Votos: {count}</Text>
      </View>

      <TouchableOpacity style={styles.appButtonContainer} onPress={onPress2}>
        <Text style={styles.appButtonText}>Limoeiro</Text>
      </TouchableOpacity>
      <View style={styles.count2Container}>
        <Text>Votos: {count2}</Text>
      </View>

      <TouchableOpacity style={styles.appButtonContainer} onPress={onPress3}>
        <Text style={styles.appButtonText}>Quixada</Text>
      </TouchableOpacity>
      <View style={styles.count3Container}>
        <Text>Votos: {count3}</Text>
      </View>

      <TouchableOpacity style={styles.appButtonContainer} onPress={onPress4}>
        <Text style={styles.appButtonText}>Juazeiro Do Norte</Text>
      </TouchableOpacity>
      <View style={styles.count4Container}>
        <Text>Votos: {count4}</Text>
      </View>

      
      <View>
        <Text>MaisVotado: {QualCidadeMaisVotada(count, count2, count3, count4, list)}; 
        </Text>
        <Text>MenosVotado: {QualCidadeMenosVotada(count, count2, count3, count4, list)};
        </Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;

