// js
// react
// third
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
// own
import { Logo } from "../components/Logo";

function Layout() {
    return (
        <View style={styles.container}>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#222"
                    },
                    headerTitle: "",
                    headerTintColor: "#fff",
                    headerRight: () => <Logo />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        padding: 10,
        gap: 20
    }
})

// exports
export default Layout;