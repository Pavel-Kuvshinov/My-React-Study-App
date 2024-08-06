export interface BasicApiRequest {
    characters: string;
    locations: string;
    episodes: string;
}

export interface ApiRequest {
    info: RequestInfo;
    results: ElementRequest[];
}

export interface GetCharactersParams {
    section: string;
    page?: number;
    name?: string;
}

export interface GetDetailedItemParams {
    section: string;
    id: number | null;
}

export type CharectersRequest = {
    info: RequestInfo;
    results: CharecterRequest[];
};

export type LocationsRequest = {
    info: RequestInfo;
    results: LocationRequest[];
};

export type EpisodesRequest = {
    info: RequestInfo;
    results: EpisodeRequest[];
};

export type ElementRequest = {
    id: number;
    name: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: RequestUrlGroup;
    location?: RequestUrlGroup;
    image?: string;
    episode?: string[] | string;
    url: string;
    created: string;
    dimension?: string;
    residents?: string[];
    air_date?: string;
    characters?: string[];
};

export type CharecterRequest = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: RequestUrlGroup;
    location: RequestUrlGroup;
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export type LocationRequest = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
};

export type EpisodeRequest = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
};

export type RequestUrlGroup = {
    name: string;
    url: string;
};

export type RequestInfo = {
    count: number;
    next: null | string;
    pages: number;
    prev: null | string;
};

export interface HeaderProps {
    handleRequest: (request: string) => void;
    handleError?: () => void;
}

export interface MainSectionProps {
    header: string;
    items: never[] | [string, string][] | CharecterRequest[] | LocationRequest[] | EpisodeRequest[];
    info: RequestInfo;
    handleRequest: (request: string) => void;
}

export interface PaginationProps {
    info: RequestInfo;
}

export interface ItemsSectionProps {
    data: ApiRequest | undefined;
    dataItem: ElementRequest | undefined;
}

export interface DetailedItemProps {
    data: ElementRequest | undefined;
}
