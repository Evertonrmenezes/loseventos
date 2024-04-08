import React from "react";
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import "react-native-gesture-handler";
import Api from "../../services/lugares.json";
import { FontAwesome5 } from "@expo/vector-icons"; // Importe o ícone FontAwesome5

function ListarProdutos() {
  const navigation = useNavigation();

  // Acesso direto aos dados do arquivo JSON importado
  const dadosApi = Api;

  console.log(dadosApi); // Exemplo de como você pode usar os dados

  return (
    <View>
      <View style={{ backgroundColor: "#FBAD16", padding: 16 }}>
        <TextInput
          style={{
            padding: 10,
            height: 60,
            marginVertical: 10,
            borderColor: "#D9D9D9",
            borderRadius: 20, // Definindo a cor da borda
            backgroundColor: "#D9D9D9",
          }}
          placeholder="Buscar por nome"
          keyboardType="default"
        />
      </View>
      <View
        style={{
          backgroundColor: "#D9D9D9",
          padding: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Icon name="map-marker" size={30} color="#000" />
        <Text style={{ fontSize: 18, fontStyle: "italic" }}>Manaus - Am</Text>
      </View>

      {/* Use ScrollView para envolver todo o conteúdo */}
      <ScrollView
        style={{
          maxHeight: "65%",
          paddingVertical: 10,
        }}
      >
        {dadosApi.map((item, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              backgroundColor: "#D9D9D9",
              margin: 20,
              borderRadius: 40,
            }}
          >
            <Image
              source={{ uri: item.lugar.img }}
              style={{ width: 320, height: 200, borderRadius: 40 }}
              resizeMode="cover"
            />
            <Text
              style={{
                display: "flex",
                fontWeight: 500,
                fontSize: 18,
                textAlign: "center",
                margin: 20,
                color: "#000414",
              }}
            >
              {item.lugar.descricao}
            </Text>
            <Text
              style={{
                display: "flex",
                fontWeight: 500,
                fontSize: 18,
                // maxWidht: 200,
                textAlign: "center",
                color: "#5c5c5c",
              }}
            >
              R$ {item.lugar.preco} noite
            </Text>
            <TouchableOpacity
              style={{
                fontWeight: "400",
                padding: 10,
                fontWeight: "500",
                fontSize: 18,
                textAlign: "center",
                margin: 20,
                color: "#000414",
              }}
              onPress={() => navigation.navigate("eventos")}
            >
              <Text
                style={{
                  backgroundColor: "#FBAD16",
                  paddingVertical: 10,
                  paddingHorizontal: 60,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  width: "80%",
                }}
              >
                Alugar
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          backgroundColor: "#FBAD16",
          padding: 16,
          height: 100,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FBAD16",
            padding: 16,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="search" size={24} color="black" />
          <Text>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FBAD16",
            padding: 16,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("eventos")}
        >
          {/* Substitua IoSearchSharp por um ícone adequado do react-native-vector-icons */}
          <FontAwesome5 name="calendar" size={24} color="black" />
          <Text>Meus Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FBAD16",
            padding: 16,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Substitua IoSearchSharp por um ícone adequado do react-native-vector-icons */}
          <FontAwesome5 name="user" size={24} color="black" />
          <Text>Minha Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ListarProdutos;
