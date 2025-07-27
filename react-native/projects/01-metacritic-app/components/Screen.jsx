// js
// react
// third
import { View } from "react-native";
// own

export function Screen({ children }) {
    return <View style={{
        flex: 1,
        backgroundColor: "#222",
        padding: 10
    }}>
        {children}
    </View>
}