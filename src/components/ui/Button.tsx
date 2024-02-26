import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Pressable, StyleSheet, ActivityIndicator } from "react-native";

/* Constants */ // @ts-ignore
import { Styles } from "~/constants/Color";
/* Types */
import { ButtonProps } from "~/types/type";

const Button = ({ onPress, icon, loading }: ButtonProps) => {
    return (
        <View>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? Styles.colors.blueSecondary
                            : Styles.colors.bluePrimary,
                    },
                    styles.pressButton,
                ]}
            >
                {loading ? (
                    <ActivityIndicator
                        size="small"
                        color={Styles.colors.white}
                    />
                ) : (
                    <Feather
                        name={icon}
                        size={24}
                        color={Styles.colors.white}
                    />
                )}
            </Pressable>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    pressButton: {
        height: 40,
        width: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowColor: Styles.colors.lightCharcoal,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});
