// js
// react
// third
import { StyleSheet, Text, View } from "react-native";
// own

function Score({ type, score, maxScore }) {
    const getColor = () => {
        const porcentage = (score / maxScore) * 100;
        if (porcentage < 40) return { backgroundColor: "red" };
        if (porcentage > 60) return { backgroundColor: "green" };
        return { backgroundColor: "yellow" };
    };

    return (
        <View>
            <Text style={[styles.score, getColor()]}>
                {type === "metaScore" ? "MetaScore" : "UserScore"} - {score} /{" "}
                {maxScore}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    score: {
        fontSize: 16,
        color: "#fff",
        marginTop: 10,
        fontWeight: "bold",
    },
});

// exports
export default Score;
