import { Text, Image, ScrollView } from "react-native";
import React from "react";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.url.at(-2);
  const ImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <ScrollView style={{ padding: 10, borderWidth: 1 }}>
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
      <Image
        source={{ uri: ImageURL }}
        style={{ width: 100, height: 100 }}
      ></Image>
    </ScrollView>
  );
}
