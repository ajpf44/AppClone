import {
    View,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";

import BigSuggestionImages from "../../data/bigSuggestionImages";

function BigSuggestionMedia() {
    return (
        <View style={styles.container}>
            <FlatList
                data={BigSuggestionImages}
                renderItem={({ item }) => <ItemMedia img={item.img} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled
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

const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    item: {
        backgroundColor: "#1a98ff",        
    },
    image: {
        width: width,
        height: 200,
    },
});

export default BigSuggestionMedia;
