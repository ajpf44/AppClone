import { View, Text, StyleSheet, Image } from "react-native";

function AppHeaderBar() {
    return (
        <View style={styles.container}>
            <Image
                style={{width: 100, height: 40}}
                source={require("../../assets/images/prime-logo-removebg.png")}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
       
    },
    text: {
        color: "#aaa"
    }
})

export default AppHeaderBar;
