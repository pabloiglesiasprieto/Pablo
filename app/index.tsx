import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hola mundo!</Text>
      <Text>Prueba</Text>
      <Button title="Prueba" onPress={alerta}/>
    </View>
  );
}
function alerta (){

  alert("Pulsaste el botón.");

}
