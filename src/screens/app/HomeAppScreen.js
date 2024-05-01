import {
    View,
    StyleSheet,
} from "react-native";

import { useState } from "react";

import AppHeaderNav from "../../components/AppHeaderNav";
import ContinueWatchingMedia from "../../components/homeScreen/ContinueWatchingMedia";

function HomeAppScreen() {
    const [select, setSelect] = useState("all");
    return (
        <View style={styles.container}>
            <AppHeaderNav active={select} setSelect={setSelect} />
            <ContinueWatchingMedia />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black"
    },
    titleSection: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10
    }
});

export default HomeAppScreen;
