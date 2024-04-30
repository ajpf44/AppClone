import { View, Text, TextInput, StyleSheet, Button} from "react-native"

function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text>Bem vindo ao clone do aplicativo tal</Text>
            <Button 
                title="Logar"
                onPress={()=>navigation.navigate('login')}
            />
            <Button title="Criar Conta"
                onPress={()=>navigation.navigate("app")}
            />
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default HomeScreen;