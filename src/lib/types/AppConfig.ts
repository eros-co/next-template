type DomainSuffix = 'com' | 'org' | 'net' | 'dev' | 'app' | 'io' | 'ai' | 'co';
type CountryCode = '1';
type PhoneNumber = `+${CountryCode}${number}${number}${number}-${number}${number}${number}-${number}${number}${number}${number}`;
type Email = `${string}@${string}.${DomainSuffix}`;

export interface AppConfig {
    name: string;
    url: `https://${string}.${DomainSuffix}`,
    ogImage: `https://${string}`,
    description: string;
    routes: Route[];
    paths: Paths;
    company?: CompanyInformation;
}

interface CompanyInformation {
    phone: Record<string, PhoneNumber>;
    email: Record<string, Email>;
    socials?: {
        x?: `https://www.x.com/${string}/`,
        instagram?: `https://www.instagram.com/${string}/`,
        facebook?: `https://www.facebook.com/${string}/`,
        linkedin?: `https://www.linkedin.com/${string}/`,
        youtube?: `https://www.youtube.com/${string}/`,
        tiktok?: `https://www.tiktok.com/${string}/`,
        github?: `https://www.github.com/${string}/`,
    };
}


export interface Route {
    title: string;
    href: `/${string}`;
}

interface Paths {
    logo: string;
}