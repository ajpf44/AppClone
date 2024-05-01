import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

import continueWatchingImages from "../../data/continueWatchingImages";

function ContinueWatching() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleSection}>Continuar Assistindo</Text>
            <FlatList
                data={continueWatchingImages}
                renderItem={({ item }) => <ItemMedia img={item.img} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
            ></FlatList>
        </View>
    );
}

const ItemMedia = ({ img }) => (
    <TouchableOpacity>
        <View style={styles.item}>
            {/* <Text style={styles.name}>{name}</Text> */}
            <Image style={styles.image} source={img} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        gap: 2,
        paddingHorizontal: 10,
    },
    titleSection: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
    },
    item: {
        backgroundColor: "#f9c2ff",
        marginHorizontal: 5,
        borderRadius: 10,
    },
    image: {
        width: 200,
        height: 120,
        borderRadius: 10,
    },
});

export default ContinueWatching;
