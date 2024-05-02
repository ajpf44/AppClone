import { View, StyleSheet, ScrollView } from "react-native";

import { useState } from "react";

import AppHeaderNav from "../../components/AppHeaderNav";

import BigSuggestionMedia from "../../components/homeScreen/BigSuggestionMedia";
import BaseMediaList from "../../components/homeScreen/BaseMediaList";

import continueWatchingImages from "../../data/continueWatchingImages";
import topMoviesImages from "../../data/topMoviesImages";

function HomeAppScreen() {
    const [select, setSelect] = useState("all");
    return (
        <ScrollView style={styles.container}>
            <AppHeaderNav active={select} setSelect={setSelect} />
            <View style={{flex:1, gap:20}}>
                <BigSuggestionMedia></BigSuggestionMedia>
                <BaseMediaList
                    tittle={"Continuar Assistindo"}
                    data={continueWatchingImages}
                />
                <BaseMediaList
                    tittle={"Prime - Filmes Recomendados"}
                    data={continueWatchingImages}
                    inverted={true}
                />
                <BaseMediaList
                    tittle={"Prime - Melhores Filmes"}
                    data={topMoviesImages}
                />
                <BaseMediaList
                    tittle={"Prime - Filmes Recomendados"}
                    data={continueWatchingImages}
                />
                <BaseMediaList
                    tittle={"Prime - Filmes Recomendados"}
                    data={continueWatchingImages}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        columnGap: 20,
    }
});

export default HomeAppScreen;
