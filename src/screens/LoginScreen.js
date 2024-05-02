import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Pressable,
} from "react-native";
import { useState } from "react";

import blueColor from "../components/blueColor";

const [email, senha] = ["ajpf44@gmail.com", "1234"];

function verifyLogin(inputEmail, inputSenha) {
    if (inputSenha == senha && inputEmail == email) {
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
                <Text style={styles.inputTitle}>Email: </Text>
                <TextInput
                    placeholder="ajpf44@gmail.com"
                    style={styles.inputs}
                    autoComplete="email"
                    onChangeText={setInputEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Senha: </Text>
                <TextInput
                    placeholder="1234"
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
                    onPress={async () => {
                        const successfulLogin = verifyLogin(
                            inputEmail,
                            inputSenha
                        );

                        if (successfulLogin) {
                            console.log("sucessfull Login");
                            setLoginStatus(true);
                            navigation.navigate("app");
                        } else setLoginStatus(false);
                    }}
                />
            </View>

            <View style={styles.loginButton}>
                <Pressable
                    delayLongPress={1000}
                    onLongPress={() => {
                        navigation.navigate("app");
                    }}
                >
                    <Text style={styles.inputTitle}>
                        Não tem conta? Cadastre-se
                    </Text>
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
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    inputs: {
        backgroundColor: "#fff",
        borderColor: blueColor,
        borderWidth: 1,
        paddingHorizontal: 4,
    },
    inputContainer: {
        width: widthElements,
        gap: 3,
    },
    inputTitle: {
        color: "white",
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
        alignSelf: "flex-start",
    },
});

export default LoginScreen;
