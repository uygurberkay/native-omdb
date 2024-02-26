import { API_URL, API_TOKEN } from "@env";
import axios from "axios";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

/* Components */
import Button from "../ui/Button";
import InputBar from "../ui/InputBar";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSearch = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(
                `${API_URL}/?apikey=${API_TOKEN}&s=${search}`,
            );
            console.log(data?.Search);
            setLoading(false);
            /* TODO: store to the local storage to not make same request use useContext*/
            return data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <View>
            <View style={styles.InputContainer}>
                <InputBar search={search} setSearch={setSearch} />
                <Button
                    icon="search"
                    onPress={handleSearch}
                    loading={loading}
                />
            </View>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {},
    InputContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
});
