import {
    View,
    Text,
    Button,
    StyleSheet,
    Pressable,
    TouchableOpacity,
} from "react-native";
import blueColor from "../../components/blueColor";

function DownloadsAppScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.normalText, styles.upperText]}>
                Nenhum vídeo baixado
            </Text>
            <TouchableOpacity>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("HomeApp")}
                >
                    <Text style={[{ fontWeight: "bold" }, styles.normalText]}>
                        Descubra vídeos para baixar
                    </Text>
                </Pressable>
            </TouchableOpacity>
            <View style={styles.autoDownloadContainer}>
                <Text style={styles.normalText}>
                    Baixar vídeos automáticos: Ativo -{" "}
                </Text>
                <Pressable>
                    <Text style={styles.blueText}> Gerenciar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        backgroundColor: "black",
    },
    autoDownloadContainer: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#666",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    upperText: {
        fontSize: 20,
    },
    normalText: {
        color: "white",
    },
    blueText: {
        color: blueColor,
    },
});

export default DownloadsAppScreen;
