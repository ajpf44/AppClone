import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign } from '@expo/vector-icons';

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AppRoutes from "./AppScreen.routes";
import AboutScreen from "../screens/AboutScreen";

const { Navigator, Screen } = createNativeStackNavigator();

function Stack() {
    return (
        <Navigator initialRouteName="home">
            <Screen name="login" component={LoginScreen} 
                options={{
                    headerTitle: "Login",
                    headerStyle: styles.header,
                    headerTintColor: "white"
                }}
            />
            <Screen name="home" component={HomeScreen} 
                options={{headerShown: false}}
            />
            <Screen
                name="app"
                component={AppRoutes}
                options={{ headerShown: false }}
            />
            <Screen name="about" component={AboutScreen} 
                options={{
                    headerTitle: "Sobre",
                    headerStyle: styles.header,
                    headerTintColor: "white"
                }}
            />
        </Navigator>
    );
}

const styles= StyleSheet.create({
    header: {
        backgroundColor: "black"
    }
})

export default Stack;
