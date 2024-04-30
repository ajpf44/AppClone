import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AppRoutes from "./AppScreen.routes";

const { Navigator, Screen } = createNativeStackNavigator();

function Stack() {
    return (
        <Navigator initialRouteName="home">
            <Screen name="login" component={LoginScreen} />
            <Screen name="home" component={HomeScreen} />
            <Screen
                name="app"
                component={AppRoutes}
                options={{ headerShown: false }}
            />
        </Navigator>
    );
}

export default Stack;
