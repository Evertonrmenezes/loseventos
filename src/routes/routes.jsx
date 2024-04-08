import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import ListarProdutos from "../pages/listarProdutos";
import Eventos from "../pages/eventos";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="eventos"
        component={Eventos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="telaCadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="listarProdutos"
        component={ListarProdutos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
