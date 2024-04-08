import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import estilos from "../../styles/style";


function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  function handleSubmit() {
    if (usuario === "menezes" && senha === "1234") { // Ajustei a comparação da senha para uma string
      navigation.navigate("listarProdutos");
    } else {
      alert("Senha incorreta!");
    }
  }

  return (
    <View style={estilos.Container}>
      <View>
        <View style={estilos.image}>
          <Image
            source={require("../../images/LogoLosEventos.png")}
            style={estilos.image}
            resizeMode="contain"
          />
        </View>
        <TextInput
          style={estilos.inputs}
          placeholder="Usuário"
          keyboardType="default"
          value={usuario} // Adicione a propriedade value para exibir o valor do usuário
          onChangeText={(text) => setUsuario(text)} // Atualize o estado do usuário quando o texto mudar
        />
        <TextInput
          style={estilos.inputs}
          placeholder="Senha"
          keyboardType="default"
          secureTextEntry={true}
          value={senha} // Adicione a propriedade value para exibir o valor da senha
          onChangeText={(text) => setSenha(text)} // Atualize o estado da senha quando o texto mudar
        />
        <TouchableOpacity style={estilos.inputsButton} onPress={() => handleSubmit()}>
          <Text style={estilos.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={estilos.inputsButtonRegister}
          onPress={() => navigation.navigate("telaCadastro")}
        >
          <Text>Não tem conta? Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
