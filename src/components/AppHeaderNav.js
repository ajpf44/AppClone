import { View, Text, Pressable, StyleSheet } from "react-native";

function AppHeaderNav(props) {
    return (
        <View style={styles.container}>
            <View>
                <Pressable 
                    style={styles.button}
                    onPress={()=>props.setSelect("all")}
                >
                    <Text
                         style={props.active=="all"?styles.activeText:styles.pressText}
                    >All</Text>
                </Pressable>
            </View>
            <View>
                <Pressable 
                    style={styles.button}
                    onPress={()=>props.setSelect("movies")}
                >
                    <Text 
                        style={props.active=="movies"?styles.activeText:styles.pressText}
                    >Movies</Text>
                </Pressable>
            </View>
            <View>
                <Pressable 
                    style={styles.button}
                    onPress={()=>props.setSelect("tv")}
                >
                    <Text 
                        style={props.active=="tv"?styles.activeText:styles.pressText}
                    >TV shows</Text>
                </Pressable>
            </View>
            <View>
                <Pressable 
                    style={styles.button}
                    onPress={()=>props.setSelect("sports")}
                >
                    <Text 
                        style={props.active=="sports"?styles.activeText:styles.pressText}
                    > Sports</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#000e",
        paddingVertical: 10
    },
    button: {
        paddingHorizontal: 5,
        paddingVertical: 2,
    }, 
    pressText: {
        color: "white",
        fontSize: 16
    },
    activeText: {
        color: 'black',
        paddingVertical: 2,
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 30
    }
})

export default AppHeaderNav;
