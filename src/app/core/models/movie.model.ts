export interface MovieResponse {
    dates:        Dates;
    page:         number;
    results:      MoviesData[];
    totalPages:   number;
    totalResults: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface MoviesData {
    adult:            boolean;
    backdropPath:     string;
    genreIDS:         number[];
    id:               number;
    originalLanguage: OriginalLanguage;
    originalTitle:    string;
    overview:         string;
    popularity:       number;
    posterPath:       string;
    releaseDate:      Date;
    title:            string;
    video:            boolean;
    voteAverage:      number;
    voteCount:        number;
}

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
    Uk = "uk",
}
