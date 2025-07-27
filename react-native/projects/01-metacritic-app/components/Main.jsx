// js
// react
import { useState, useEffect } from "react";
// third
import { View, FlatList, ActivityIndicator, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
// own
import gamesData from "../lib/data.json";
import AnimatedGameCard from "./AnimatedGameCard";
import { CircleInfoIcon } from "./Icons";
import { Screen } from "./Screen";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setGames(gamesData);
  }, []);

  return (
    <Screen>
      <Stack.Screen options={{
        headerTitle: "Index"
      }} />
      <Link asChild href="/about">
        <Pressable>
          <CircleInfoIcon />
        </Pressable>
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.thumbnailUrl}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
