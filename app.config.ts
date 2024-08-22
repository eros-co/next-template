import { AppConfig } from '@/types';

const config: AppConfig = {
    name: 'New Project',
    url: "https://nextjs.org/",
    ogImage: "https://nextjs.org/og.jpg",
    description: "This is a new NextJS project.",
    routes: [
        { title: "Home", href: "/" },
        { title: "Test Link 2", href: '/#' }
    ],
    paths: {
        logo: 'logo.png'
    }
};

export { config };