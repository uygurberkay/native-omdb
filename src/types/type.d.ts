import { StackNavigationProp } from "@react-navigation/stack";

export type NavigationParamList = {
    ListScreen: undefined;
    DetailsScreen: { name: string };
};

export interface ButtonProps {
    onPress: any;
    icon: any;
    loading: boolean;
}

export interface InputBarProps {
    search: string;
    setSearch: any;
}

export interface ExampleData {
    Search: Search[];
    totalResults: string;
    Response: string;
    DetailedSearch: DetailedSearch[];
}

export interface DetailedSearch {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
}

export interface Rating {
    Source: string;
    Value: string;
}

export interface Search {
    Title: string;
    Year: string;
    imdbID: string;
    Type: Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
}

export interface MovieContextType {
    movies: Search[];
    setMovies: React.Dispatch<React.SetStateAction<Search[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ListScreenScreenNavigationProps = StackNavigationProp<
    NavigationParamList,
    "ListScreen"
>;
