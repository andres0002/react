// js
// react
// third
import { Tabs } from "expo-router";
import { View } from "react-native";
// own
import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#222"
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color }) => <InfoIcon color={color} />
                }}
            />
        </Tabs>
    )
}