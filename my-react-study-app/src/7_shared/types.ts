export interface BasicRequest {
    books: string;
    characters: string;
    houses: string;
}

export interface HeaderProps {
    handleRequest: (request: string) => void;
}

export interface MainSectionProps {
    currentRequest: string;
}
