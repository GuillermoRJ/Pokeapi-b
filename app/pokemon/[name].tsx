import { View, Text, Alert, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
interface PokemonInfo {
  id: number;
  name: string;

  sprites: {
    other: {
      front_default: string;
    };
  };
}
export default function PokemonData() {
  const params = useLocalSearchParams();
  useEffect(() => {
    console.log("Entré en pantalla");
    getPokemonData();
  }, []);
  const [pokemonData, setPokemonData] = useState<PokemonInfo | null>(null);

  const getPokemonData = async () => {
    try {

      const URL = `https://pokeapi.co/api/v2/pokemon/${params.name}`;

      const response = await fetch(URL);

      const data = await response.json();

      setPokemonData(data);
      
    } catch {
      Alert.alert("Ocurrio un error");
      window.alert("Ocurrio un error");
    }
  };
  return (
    <View>
      <Text>PokemonData</Text>
      <Text>{params.name}</Text>
      <Text>{pokemonData?.id} </Text>
      <Text>{JSON.stringify(pokemonData)}</Text>
      <Text></Text>
      <Image source={{ uri: pokemonData?.sprites.other.front_default }}></Image>
    </View>
  );
}
