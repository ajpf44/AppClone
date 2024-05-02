import { View, Text, StyleSheet } from "react-native";

function LiveTvAppScreen() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Em construção</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "black"
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight:'bold'
    }
})
export default LiveTvAppScreen;
