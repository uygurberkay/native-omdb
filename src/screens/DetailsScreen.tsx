import { RouteProp, useRoute } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* Types */
import { NavigationParamList } from "~/types/type";

type DetailsScreenSreenRouteProp = RouteProp<
    NavigationParamList,
    "DetailsScreen"
>;

export default function DetailsScreen() {
    const router = useRoute<DetailsScreenSreenRouteProp>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>DetailsScreen</Text>
                <Text style={styles.subtitle}>
                    Showing DetailsScreen for user {router.params.name}.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
});
