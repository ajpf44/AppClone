import { View, Text, TextInput, StyleSheet, Button, Pressable } from "react-native";
import { useState } from "react";

const [email, senha] = ["ajpf44@gmail.com", "1234"];

function doLogin(nav, inputEmail, inputSenha) {
    if (inputSenha == senha && inputEmail == email) {
        console.log("aqui");
        nav.navigate("app");

        return true;
    }

    return false;
}

function LoginScreen({ navigation }) {
    const [inputSenha, setInputSenha] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const [loginStatus, setLoginStatus] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text>Email: </Text>
                <TextInput
                    placeholder="Olá mundo"
                    style={styles.inputs}
                    autoComplete="email"
                    onChangeText={setInputEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Senha: </Text>
                <TextInput
                    placeholder="Olá mundo"
                    style={styles.inputs}
                    secureTextEntry
                    onChangeText={setInputSenha}
                />
            </View>

            <View style={styles.loginButton}>
                <Button
                    title="Logar"
                    
                    onLongPress={() => {
                        console.log("long press");
                        navigation.navigate("app");
                    }}
                    onPress={() => {
                        const successfulLogin = doLogin(
                            navigation,
                            `${inputEmail}`,
                            inputSenha
                        );

                        if (successfulLogin) setLoginStatus(true);
                        else setLoginStatus(false);
                    }}
                />
            </View>

            <View style={styles.loginButton}>
                <Pressable
                    delayLongPress={2000}
                    onLongPress={() => {
                        console.log("long press");
                        navigation.navigate("app");
                    }}
                >
                    <Text>Não tem conta? Cadastre-se</Text>
                </Pressable>
            </View>

            <View style={styles.loginStatusContainer}>
                <Text style={styles.loginStatus}>
                    {loginStatus ? "" : "Senha e/ou Email errados"}
                </Text>
            </View>
        </View>
    );
}
const widthElements = "60%";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    inputs: {
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 1,
        paddingHorizontal: 4,
    },
    inputContainer: {
        width: widthElements,
    },
    loginButton: {
        width: widthElements,
        marginTop: 10,
    },
    loginStatusContainer: {
        width: widthElements,
    },
    loginStatus: {
        color: "red",
        alignSelf: 'flex-start'
    },
});

export default LoginScreen;
