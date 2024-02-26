import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

/* Context */
import { MovieProvider } from "~/contexts/movieContext";
/* Navigations */
import Navigation from "~/navigation/Navigation";

const App = () => {
    return (
        <MovieProvider>
            <StatusBar style="dark" />
            <Navigation />
        </MovieProvider>
    );
};

export default App;
