import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import HomeAppScreen from "../screens/app/HomeAppScreen";
import StoreAppScreen from "../screens/app/StoreAppScreen";
import DownloadsAppScreen from "../screens/app/DownloadsAppScreen";

import AppHeaderBarLogo from "../components/AppHeaderBarLogo";
import AppHeaderBarRight from "../components/AppHeaderBarRight";
import LiveTvAppScreen from "../screens/app/LiveTvAppScreen";
import SearchTvAppScreen from "../screens/app/SearchAppScreen";

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
                    headerRight: () => <AppHeaderBarRight />,
                    headerStyle: styles.header,
                    tabBarStyle: styles.tabBar,
                    headerTitleStyle: styles.standardTitle
                }}
            />
            <Screen
                name="Live TV"
                component={LiveTvAppScreen}
                options={{
                    title: "Live TV",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="videocamera" size={24} color="white" />
                    ),
                    headerRight: () => <AppHeaderBarRight />,
                    headerStyle: styles.header,
                    tabBarStyle: styles.tabBar,
                    headerTitleStyle: styles.standardTitle
                }}
            />
            <Screen
                name="Downloads"
                component={DownloadsAppScreen}
                options={{
                    title: "Downloads",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="download" size={24} color="white" />
                    ),
                    headerRight: () => <AppHeaderBarRight />,
                    headerStyle: styles.header,
                    tabBarStyle: styles.tabBar,
                    headerTitleStyle: styles.standardTitle
                }}
            />
            <Screen
                name="Search"
                component={SearchTvAppScreen}
                options={{
                    title: "Search",
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name="search1" size={24} color="white" />
                    ),
                    headerRight: () => <AppHeaderBarRight />,
                    headerStyle: styles.header,
                    tabBarStyle: styles.tabBar,
                    headerTitleStyle: styles.standardTitle
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
    standardTitle: {
        color: "#fff"
    }
});

export default AppRoutes;
