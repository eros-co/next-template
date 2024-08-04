import { AppConfig } from '@/types';

const config: AppConfig = {
    name: 'New Project',
    routes: [
        { title: "Home", url: "/" },
        { title: "Test Link 2", url: '/#' }
    ],
    paths: {
        logo: 'logo.png'
    }
};

export default config;