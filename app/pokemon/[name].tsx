import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function PokemonData() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>{params.name} </Text>
    </View>
  );
}
