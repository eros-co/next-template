import { AppConfig } from '@/lib/types';

const config: AppConfig = {
    name: 'New Project',
    url: "https://nextjs.org",
    ogImage: "https://nextjs.org/og.jpg",
    description: "This is a new NextJS project.",
    routes: [
        { title: "Link", href: '/#' }
    ],
    paths: {
        logo: 'logo.png'
    }
};

export { config };