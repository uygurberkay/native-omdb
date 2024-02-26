import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet } from "react-native";

/* Screens */
import DetailsScreen from "../screens/DetailsScreen";
import ListScreen from "../screens/ListScreen";

/* Types */
import { NavigationParamList } from "~/types/type";

const Stack = createStackNavigator<NavigationParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListScreen">
                <Stack.Screen name="ListScreen" component={ListScreen} />
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailsScreen}
                    options={({ navigation }) => ({
                        headerLeft: () => {
                            return (
                                <View style={styles.backButton}>
                                    <Feather
                                        name="chevron-left"
                                        size={16}
                                        color="#007AFF"
                                    />
                                    <Text
                                        style={styles.backButtonText}
                                        onPress={navigation.goBack}
                                    >
                                        Back
                                    </Text>
                                </View>
                            );
                        },
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({
    backButton: {
        flexDirection: "row",
        paddingLeft: 20,
    },
    backButtonText: {
        color: "#007AFF",
        marginLeft: 4,
    },
});
