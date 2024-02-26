import { API_URL, API_TOKEN } from "@env";
import axios from "axios";
import React, {
    createContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
} from "react";

/* Types */
import { MovieContextType, Search } from "~/types/type";
interface MovieProviderProps {
    children: ReactNode;
}

/* Context */
const MovieContext = createContext<MovieContextType | undefined | any>(
    undefined,
);
// @ts-ignore
// const MovieContext = createContext();

/* Provider */
const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
    /* Global states */
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<Search[]>([]);

    // Get Movies
    const getAllMovies = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(
                `${API_URL}/?apikey=${API_TOKEN}&s=Lord of the Rings`,
            );
            setLoading(false);
            setMovies(data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    // Initial Movies
    useEffect(() => {
        getAllMovies();
    }, []);

    /* To fix re-render issue */
    const values = useMemo(
        () => [movies, setMovies, loading, setLoading],
        [movies, loading, setMovies, setLoading],
    );

    return (
        <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
    );
};

export { MovieContext, MovieProvider };
