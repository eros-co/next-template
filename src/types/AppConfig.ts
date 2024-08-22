export interface AppConfig {
    name: string;
    url: `https://${string}.com`,
    ogImage: `https://${string}`,
    description: string;
    routes: Route[];
    paths: Paths;
}

export interface Route {
    title: string;
    href: `/${string}`;
}

interface Paths {
    logo: string;
}