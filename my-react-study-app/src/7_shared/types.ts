export type BasicRequest = {
    books: string;
    characters: string;
    houses: string;
};

export type BookRequest = {
    authors: string[];
    characters: string[];
    country: string;
    isbn: string;
    mediaType: string;
    name: string;
    numberOfPages: number;
    povCharacters: string[];
    publisher: string;
    released: string;
    url: string;
};

export type CharecterRequest = {
    aliases: string[];
    allegiances: string[];
    books: string[];
    born: string;
    culture: string;
    died: string;
    father: string;
    gender: string;
    mother: string;
    name: string;
    playedBy: string;
    povBooks: string;
    spouse: string;
    titles: string;
    tvSeries: string[];
    url: string;
};

export type HouseRequest = {
    ancestralWeapons: string[];
    cadetBranches: string[];
    coatOfArms: string;
    currentLord: string;
    diedOut: string;
    founded: string;
    founder: string;
    heir: string;
    name: string;
    overlord: string;
    region: string;
    seats: string;
    swornMembers: string[];
    titles: string[];
    url: string;
    words: string;
};

export interface HeaderProps {
    handleRequest: (request: string) => void;
}

export interface MainSectionProps {
    currentRequest: string;
}
