import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import HomeAppScreen from "../screens/app/HomeAppScreen";
import AppHeaderBarLogo from "../components/AppHeaderBarLogo";
import AppHeaderBarRight from "../components/AppHeaderBarRight";
import StoreAppScreen from "../screens/app/StoreAppScreen";

const { Navigator, Screen } = createBottomTabNavigator();

function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name="HomeApp"
                component={HomeAppScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="home" size={24} color="white" />
                    ),
                    headerTitle: () => <AppHeaderBarLogo />,
                    headerRight: () => <AppHeaderBarRight />,
                    headerStyle: styles.header,
                    tabBarStyle: styles.tabBar,
                }}
            />
            <Screen
                name="Store"
                component={StoreAppScreen}
                options={{
                    title: "Store",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={24}
                            color="white"
                        />
                    ),
                    headerTitle: () => <AppHeaderBarLogo />,
                    headerRight: () => <AppHeaderBarRight />,
                    headerStyle: styles.header,
                }}
            />
            <Screen
                name="Live TV"
                component={HomeAppScreen}
                options={{
                    title: "Live TV",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="videocamera" size={24} color="white" />
                    ),
                }}
            />
            <Screen
                name="Downloads"
                component={HomeAppScreen}
                options={{
                    title: "Downloads",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="download" size={24} color="white" />
                    ),
                }}
            />
            <Screen
                name="Search"
                component={HomeAppScreen}
                options={{
                    title: "Search",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="search1" size={24} color="white" />
                    ),
                }}
            />
        </Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "black",
    },
    tabBar: {
        backgroundColor: "black",
    },
});

export default AppRoutes;
