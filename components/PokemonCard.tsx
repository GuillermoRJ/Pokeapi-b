import { Text, Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.at(-2);
  const ImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const PokemonURL = "http://localhost:8081/pokemon/"
  return (
    <Pressable
      style={{ padding: 10, borderWidth: 1 }}
      onPress={() => router.push(`${PokemonURL}${props.name}`)}
    >
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
      <Image
        source={{ uri: ImageURL }}
        style={{ width: 100, height: 100 }}
      ></Image>
    </Pressable>
  );
}
