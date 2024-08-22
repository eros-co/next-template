type DomainSuffix = 'com' | 'org' | 'net';

export interface AppConfig {
    name: string;
    url: `https://${string}.${DomainSuffix}`,
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