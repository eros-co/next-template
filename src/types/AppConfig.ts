export interface AppConfig {
    name: string;
    routes: Route[];
    paths: Paths;
}

export interface Route {
    title: string;
    url: `/${string}`;
}

interface Paths {
    logo: string;
}