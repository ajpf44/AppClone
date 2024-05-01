import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    FlatList,
    Image
} from "react-native";

import { useState } from "react";

import AppHeaderNav from "../../components/AppHeaderNav";

import MOVIES from "../../data/movies";

const DATA = MOVIES;

const Item = ({ img }) => (
    <View style={styles.item}>
        {/* <Text style={styles.name}>{name}</Text> */}
        <Image
            style={styles.image}
            source={img}
        />
    </View>
);

function HomeAppScreen() {
    const [select, setSelect] = useState("all");
    return (
        <View style={styles.container}>
            <AppHeaderNav active={select} setSelect={setSelect}></AppHeaderNav>
            <View style={styles.containerContiueWatching}>
                <Text style={styles.titleSection}>Continuar Assistindo</Text>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item img={item.img} />}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black"
    },
    containerContiueWatching: {
        gap: 2,
        paddingHorizontal: 10
    },
    item: {
        backgroundColor: "#f9c2ff",
        marginHorizontal: 5,
        borderRadius: 10
    },
    name: {
        fontSize: 16,
    },
    image: {
        width:200,
        height: 120,
        borderRadius: 10
    },
    titleSection: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10
    }
});

export default HomeAppScreen;
