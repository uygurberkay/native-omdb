import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

/* Constants */ // @ts-ignore
import { Styles } from "~/constants/Color";
/* Types */
import { ListScreenScreenNavigationProps, Search } from "~/types/type";

interface MovieItemProps {
    data: Search;
}

const MovieItem = ({ data }: MovieItemProps) => {
    const navigation = useNavigation<ListScreenScreenNavigationProps>();

    return (
        <Pressable
            onPress={() => {console.log('Pressed')}}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? Styles.colors.bluePrimary
                        : Styles.colors.lightCoral,
                },
                styles.container,
            ]}
        >
            <View style={styles.boxContainer}>
                <Image
                    style={styles.imageContainer}
                    source={{
                        uri: data.Poster,
                    }}
                />
                <View>
                    <Text style={styles.title}>{data.Title}</Text>
                    <View style={styles.genre}>
                        <Text style={styles.smallTitle}>{data.Year}</Text>
                        <Text style={styles.smallTitle}>{data.Type}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default MovieItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Styles.colors.lightCoral,
        borderRadius: 12,
        borderColor: Styles.colors.lightCharcoal,
        borderWidth: 0.4,
        paddingVertical: 12,
        marginVertical: 8,
        elevation: 5,
        shadowColor: Styles.colors.lightCharcoal,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    boxContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        paddingHorizontal: 12,
        gap: 12,
    },
    imageContainer: {
        width: 60,
        height: 60,
    },
    genre: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    title: {
        fontSize: 16,
    },
    smallTitle: {
        fontSize: 12,
    },
});
