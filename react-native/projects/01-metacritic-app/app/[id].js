// js
// react
// third
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams, Stack } from "expo-router";
import { Screen } from "../components/Screen";
// own
import gamesData from "../lib/data.json";
import Score from "../components/Score";

export default function Detail() {
    const { id } = useLocalSearchParams();
    const game = gamesData.find(game => game.id === Number(id));
    return (
        <Screen>
            <Stack.Screen options={{
                headerTitle: `Id -> ${id}`
            }} />
            {
                game === undefined ? <ActivityIndicator style={{ flex: 1 }} /> : <ScrollView>
                    <Link href="/" style={{
                        color: '#99f',
                        marginBottom: 10
                    }}>
                        Go to Back
                    </Link>
                    <View key={game.thumbnailUrl} style={styles.card}>
                        <Image source={{ uri: game.thumbnailUrl }} style={styles.image} />
                        <Text style={styles.title}>{game.title}</Text>
                        <Text style={styles.description}>{game.description}</Text>
                        <Score type="metaScore" score={game.metaScore} maxScore={100} />
                        <Score type="metaUser" score={game.userScore} maxScore={100} />
                    </View>
                </ScrollView>
            }
        </Screen>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 214,
        height: 294,
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