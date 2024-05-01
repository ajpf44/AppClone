import { View, StyleSheet } from "react-native"
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';



function AppHeaderBarRight(){
    const iconsSize = 30;
    return (
        <View style={styles.container}>
            <MaterialIcons name="connected-tv" size={iconsSize} color="white" />
            <FontAwesome name="user-circle" size={iconsSize} color="white" />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: 10,
        gap: 20
    }
})

export default AppHeaderBarRight;