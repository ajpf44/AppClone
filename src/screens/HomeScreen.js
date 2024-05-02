import { View, Text, TextInput, StyleSheet, Button, Dimensions} from "react-native"
import blueColor from "../components/blueColor"

function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.objContainer}>
                <Text style={styles.title}>Bem vindo</Text>
                <Text
                    style={styles.aboutText}
                >Esse é o clone do aplicativo prime video da Amazon, mais informações na aba sobre</Text>
                <Button
                    title="Logar"
                    onPress={()=>navigation.navigate('login')}
                />
                <Button title="Entrar Auto"
                    onPress={()=>navigation.navigate("app")}
                />
                <Button 
                    title="Sobre"
                    color="#1aff"
                />
            </View>
        </View>
    )
}

const width= Dimensions.get("window").width*0.7
const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    objContainer: {
        gap: 20,
        width: width
    },
    title: {
        fontSize: 20,
        color: "#ddd",
        fontWeight: "600",
        marginBottom: 10
    },
    aboutText: {
        color: "white",
        textAlign: "justify",
        marginBottom: -10
    }
})
export default HomeScreen;