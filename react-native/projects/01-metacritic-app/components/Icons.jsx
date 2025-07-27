// js
// react
// third
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
// own

export function HomeIcon(props) {
    return (
        <AntDesign
            name="home"
            size={24}
            color="#fff"
            style={{
                marginBottom: 10,
            }}
            {...props}
        />
    );
}

export function CircleInfoIcon(props) {
    return (
        <Entypo
            name="info-with-circle"
            size={24}
            color="#fff"
            style={{
                marginBottom: 10,
            }}
            {...props}
        />
    );
}

export function InfoIcon(props) {
    return (
        <Entypo
            name="info"
            size={24}
            color="#fff"
            style={{
                marginBottom: 10,
            }}
            {...props}
        />
    );
}
