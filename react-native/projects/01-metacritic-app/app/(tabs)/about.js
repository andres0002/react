// js
// react
// third
import { Pressable, ScrollView, Text } from "react-native";
import { Link, Stack } from "expo-router";
// own
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

function About() {
    return (
        <Screen>
            <Stack.Screen options={{
                headerTitle: "About"
            }} />
            <ScrollView>
                <Link asChild href="/">
                    <Pressable>
                        <HomeIcon />
                    </Pressable>
                </Link>
                <Text style={{
                    color: "#fff"
                }}>
                    About
                </Text>
                <Text style={{
                    color: "#fff"
                }}>
                    Sobre nosotros.
                    Sobre nosotros.
                    Sobre nosotros.
                    Sobre nosotros.
                    Sobre nosotros.
                </Text>
            </ScrollView>
        </Screen>
    )
}

// exports
export default About;