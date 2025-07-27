// js
// react
// third
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
// own
import Score from "./Score";
import { Link } from "expo-router";

export default function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.id}`}>
      <Pressable>
        <View key={game.thumbnailUrl} style={styles.card}>
          <Image source={{ uri: game.thumbnailUrl }} style={styles.image} />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.description}>{game.description}</Text>
          <Score type="metaScore" score={game.metaScore} maxScore={100} />
          <Score type="metaUser" score={game.userScore} maxScore={100} />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    borderRadius: 8,
    border: "1px solid #fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
});
