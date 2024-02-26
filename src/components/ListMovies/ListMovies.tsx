import React, { useContext } from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from "react-native";

import MovieItem from "./MovieItem";

import { MovieContext } from "~/contexts/movieContext";

const ListMovies = () => {
    const [movieContext, setMovieContext]: any = useContext(MovieContext);
    console.log("Movies: ", movieContext.Search);
    const movies = movieContext.Search;
    if (!movieContext) {
        // Handle the case where the context is not available
        return <Text>Aradığınız film bulunamadı</Text>;
    }

    // if (loading) {
    //     return <ActivityIndicator size="large" />;
    // }

    return (
        <View>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.imdbID.toString()}
                renderItem={({ item }) => <MovieItem data={item} />}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

export default ListMovies;

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    itemContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 18,
    },
});
