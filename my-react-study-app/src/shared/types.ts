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
    items: never[] | [string, string][] | ElementRequest;
    info: RequestInfo;
    handleRequest: (request: string) => void;
}

export interface PaginationProps {
    info: RequestInfo;
}

export interface ItemsSectionProps {
    data: ApiRequest;
    idItem: number | undefined | null;
    dataItem: ElementRequest;
}

export interface DetailedItemProps {
    data: ElementRequest;
}
