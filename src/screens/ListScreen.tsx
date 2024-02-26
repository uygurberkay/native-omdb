import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* Components */
import ListMovies from "~/components/ListMovies/ListMovies";
import SearchBar from "~/components/SearchBar/SearchBar";

export default function ListScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <ListMovies />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
