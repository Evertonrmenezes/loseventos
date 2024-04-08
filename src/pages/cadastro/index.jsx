import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import estilos from "../../styles/style";

function Cadastro() {
  const navigation = useNavigation();

  function handleSubmit(){
    alert("Cadastrado!")
  }

  return (
    <View style={estilos.Container}>
      <View style={estilos.Container}>
        <Text>CRIAR UMA NOVA CONTA DE USUÁRIO</Text>
        <View style={estilos.inputsCadastro}>
          <TextInput
            style={estilos.inputsCad}
            placeholder="Nome"
            keyboardType="default"
            required
          />
          <TextInput
            style={estilos.inputsCad}
            placeholder="Sobrenome"
            keyboardType="default"
          />
        </View>
        <TextInput
          style={estilos.inputs}
          placeholder="Email"
          keyboardType="default"
        />
        <TextInput
          style={estilos.inputs}
          placeholder="Senha"
          keyboardType="default"
          secureTextEntry={true}
        />
        <TextInput
          style={estilos.inputs}
          placeholder="Confirmar senha "
          keyboardType="default"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={estilos.inputsButton}
          onPress={() => handleSubmit()}
        >
          <Text style={estilos.buttonText}>CRIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Cadastro;
