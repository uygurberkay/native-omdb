import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

/* Constants */ // @ts-ignore
import { Styles } from "~/constants/Color";
/* Types */
import { InputBarProps } from "~/types/type";

const InputBar = ({ search, setSearch }: InputBarProps) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInputContainer}
                value={search}
                onChangeText={(text) => setSearch(text)}
            />
        </View>
    );
};

export default InputBar;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textInputContainer: {
        height: 40,
        width: "90%",
        borderWidth: 0.5,
        borderColor: Styles.colors.grey,
        backgroundColor: Styles.colors.white,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
});
