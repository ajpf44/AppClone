import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Dimensions,
} from "react-native";
import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import BaseMediaList from "../../components/homeScreen/BaseMediaList";

import BigSuggestionImages from "../../data/bigSuggestionImages";
import continueWatchingImages from "../../data/continueWatchingImages";
import topMoviesImages from "../../data/topMoviesImages";

const execSearch = (str) => {
    const foundMovies = [];
    const foundMoviesNames = [];
    const dataToSearch = [
        BigSuggestionImages,
        continueWatchingImages,
        topMoviesImages,
    ];

    dataToSearch.map((d) => {
        d.map((movie) => {
            const movieNameSearch = movie.name.toLowerCase();
            const strToSearch = str.toLowerCase();
            if (
                movieNameSearch.includes(strToSearch) ||
                strToSearch.includes(movieNameSearch)
            ) {
                /*
                VERIFICA SE O FILME JÁ FOI INSERIDO NO ARRAY FOUNDMOVIES
                ESSA VERIFICAÇÃO TEM QUE OCORRER POR QUE EXISTE REDUNDANCIA NOS FILMES
                DOIS DATAS PODEM TER O MESMO FILME
                */
                if (!foundMovies.includes(movie.name)) {
                    movie.id = foundMovies.length;
                    foundMovies.push(movie);
                    foundMoviesNames.push(movie.name);
                }
            }
        });
    });

    return foundMovies;
};

function SearchTvAppScreen() {
    const [searchTerm, setSearchTerm] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput
                    placeholder="Pesquise pelo nome do filme"
                    value={searchTerm}
                    onChangeText={(text) => {
                        setFoundMovies([]);
                        setSearchTerm(text);
                    }}
                    onEndEditing={() => {
                        setFoundMovies(execSearch(searchTerm));
                    }}
                />
                <SimpleLineIcons name="microphone" size={24} color="black" />
            </View>
            <View style={styles.searchResultContainer}>
                <BaseMediaList data={foundMovies} tittle="Filmes Encontrados" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: "center",
        backgroundColor: "black",
        gap: 30
    },
    inputContainer: {
        width: Dimensions.get("window").width * 0.8,
        flexDirection: "row",
        gap: 5,
        backgroundColor: "#eee",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    searchResultContainer: {
        width: Dimensions.get("window").width,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
export default SearchTvAppScreen;
