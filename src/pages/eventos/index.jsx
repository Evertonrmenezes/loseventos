import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

function Eventos() {
  const Api = [
    {
      lugar: {
        id: 1,
        descricao: "vila em Les Terres Basses, São Martinho",
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-869617827911971004/original/2fd8957a-187a-49eb-94c2-2fcf185e4dc4.jpeg?im_w=960",
        preco: "14.861",
      },
    },
    // Restante dos objetos...
  ];

  const navigation = useNavigation();

  // Acessando a primeira imagem da fonte de dados
  const imagemUrl = Api[0].lugar.img;

  return (
    <View>
      <View style={{ backgroundColor: "#FBAD16" }}>
        <TouchableOpacity
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("listarProdutos")}
        >
          <Icon
            name="arrow-left"
            size={30}
            color="#000"
            style={{ padding: 10 }}
          />
          <Text style={{ fontWeight: "400", padding: 10 }}>Local</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <TouchableOpacity
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
              source={{ uri: imagemUrl }}
              style={{ width: 320, height: 200, borderRadius: 40 }}
              resizeMode="cover"
            />
            {/* Usando a URL da imagem */}
            <Text
              style={{
                fontWeight: "500",
                fontSize: 18,
                textAlign: "center",
                margin: 20,
                color: "#000414",
              }}
            >
              Descrição do lugar
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 18,
                textAlign: "center",
                color: "#5c5c5c",
              }}
            >
              R$ {Api[0].lugar.preco} por noite
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: "#FBAD16", padding: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={{ fontWeight: "400", padding: 10 }}>
            <Text>SOBRE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ fontWeight: "400", padding: 10 }}>
            <Text>FOTOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ fontWeight: "400", padding: 10 }}>
            <Text>CHAT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ fontWeight: "400", padding: 10 }}>
            <Text>AVALIAÇÕES</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FBAD16",
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            width: "80%",
            margin: 62,
          }}
          onPress={() => alert("Você contratou esse serviço!")}
        >
          <Text>Contratar Serviço</Text>
        </TouchableOpacity>
      </View>

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
          onPress={() => navigation.navigate("listarProdutos")}
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

export default Eventos;
