import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Dimensions,
    Image,
    Pressable,
    Linking,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import blueColor from "../components/blueColor";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";

function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.elementsContainer}>
                <Image
                    style={styles.profileImage}
                    source={require("../../assets/images/about/perfil-photo.jpg")}
                />
                <View>
                    <Text style={[{ color: "white" }, styles.profileText]}>
                        Desenvolvido por:{" "}
                    </Text>
                    <Text style={[{ color: blueColor }, styles.profileText]}>
                        Alexandre José Poncaino Ferreira
                    </Text>
                </View>

                <View>
                    <Text style={styles.whiteText}>
                        Olá! Meu nome é Alexandre, sou desenvolvedor e
                        professor. Atualmente participo da residência em
                        software pelo Serratec/Senai, para qual esse projeto foi
                        montado. Tenho interesse pelo backend e também pelo
                        desenvolvimento mobile. Meus principais tópicos de
                        interesse incluem Node.js, Java, Spring Boot, SQL e
                        React Native.
                    </Text>
                </View>

                <View style={styles.contactListContainer}>
                    <Text style={styles.secTitle}>Contato: </Text>
                    <View style={styles.itemContactList}>
                        <Pressable
                            onPress={() =>
                                Linking.openURL("https://github.com/ajpf44")
                            }
                            style={styles.itemContactList}
                        >
                            <AntDesign name="github" size={24} color="white" />

                            <Text style={styles.whiteText}>
                                https://github.com/ajpf44
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.itemContactList}>
                        <Pressable
                            onPress={() =>
                                Linking.openURL(
                                    "https://www.linkedin.com/in/ajpf44/"
                                )
                            }
                            style={styles.itemContactList}
                        >
                            <AntDesign
                                name="linkedin-square"
                                size={24}
                                color="white"
                            />

                            <Text style={styles.whiteText}>
                                https://www.linkedin.com/in/ajpf44/
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.itemContactList}>
                        <Pressable
                            onPress={() =>
                                Linking.openURL(
                                    "https://www.youtube.com/@ajpf44"
                                )
                            }
                            style={styles.itemContactList}
                        >
                            <AntDesign name="youtube" size={24} color="white" />

                            <Text style={styles.whiteText}>
                                https://www.youtube.com/@ajpf44
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    elementsContainer: {
        flex: 0.8,
        justifyContent: "space-evenly",
        width: width * 0.7,
    },
    profileText: {
        fontSize: 16,
    },
    whiteText: {
        color: "white",
        textAlign: "justify",
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        alignSelf: "center",
    },
    secTitle: {
        color: blueColor,
        fontSize: 18,
    },
    contactListContainer: {
        gap: 10,
    },
    itemContactList: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
});
export default AboutScreen;
