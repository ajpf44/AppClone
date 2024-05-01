import { View, Text, TextInput, StyleSheet, Button, FlatList} from "react-native"

import { useState } from "react";

import AppHeaderNav from "../../components/AppHeaderNav";

function HomeAppScreen (){
    const [select, setSelect] = useState("all");
    return(
        <View>
            <AppHeaderNav active={select} setSelect={setSelect}></AppHeaderNav>
            <FlatList>
                
            </FlatList>
        </View>
    )
}

export default HomeAppScreen;