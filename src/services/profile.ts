import { API_BASE_URL } from './config';

export interface ProfileData {
    name: string;
    title: string;
    bio: string;
    avatarUrl: string;
    aboutSubtitle: string;
    aboutDescription1: string;
    aboutDescription2: string;
    aboutDescription3: string;
    coreExpertise: { name: string, percentage: number }[];
    location: string;
    email: string;
    phone: string;
}

export const getProfileSettings = async (locale: string = 'en'): Promise<ProfileData> => {
    try {
        const baseKeys = [
            'profile.name', 'profile.title', 'profile.bio', 'profile.avatarUrl',
            'about.subtitle', 'about.desc1', 'about.desc2', 'about.desc3',
            'about.expertise', 'about.location', 'about.email', 'about.phone'
        ];

        // Request both base keys and localized keys
        const localizedKeys = baseKeys.map(key => `${key}.${locale}`);
        const allKeys = [...baseKeys, ...localizedKeys].join(',');

        const response = await fetch(`${API_BASE_URL}/settings?keys=${allKeys}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        const data = json.data || {};

        // Returns localized value if it exists AND is non-empty, otherwise falls back to base key
        const getValue = (key: string) => {
            const localized = data[`${key}.${locale}`];
            // Only use localized if it's a non-empty string
            if (localized !== undefined && localized !== null && localized.trim() !== '') {
                return localized;
            }
            return data[key];
        };

        return {
            name: getValue('profile.name') || 'Rizky Haffiyan Roseno',
            title: getValue('profile.title') || 'Backend Engineer · Go · Microservices · Cloud',
            bio: getValue('profile.bio') || 'Passionate about building high-performance APIs, cloud-native architectures, and scalable backend systems that power exceptional user experiences.',
            avatarUrl: getValue('profile.avatarUrl') || '/profile.jpg',
            aboutSubtitle: getValue('about.subtitle') || 'Backend engineer yang fokus pada hasil: reliabel, terukur, dan sederhana untuk dioperasikan.',
            aboutDescription1: getValue('about.desc1') || 'Saya membangun backend yang cepat dan robust dengan Go, fokus pada microservices, transaksi konsisten, dan API ber-throughput tinggi.',
            aboutDescription2: getValue('about.desc2') || 'Beberapa hasil: memangkas p95 response hingga 40% lewat indexing dan caching, meningkatkan uptime jadi 99.9% dengan observability dan circuit breaker, serta menurunkan waktu rilis lewat CI/CD yang rapih.',
            aboutDescription3: getValue('about.desc3') || 'Prinsip saya: kirim bernilai bisnis, ukur dengan metrik, dan jaga agar sistem mudah dirawat.',
            coreExpertise: getValue('about.expertise') ? JSON.parse(getValue('about.expertise')) : [
                { name: 'Backend Development', percentage: 95 },
                { name: 'Golang', percentage: 90 },
                { name: 'Database Design', percentage: 85 },
                { name: 'System Architecture', percentage: 80 }
            ],
            location: getValue('about.location') || 'Jakarta, Indonesia',
            email: getValue('about.email') || 'rihanodev@gmail.com',
            phone: getValue('about.phone') || '+62 812-3456-7890'
        };
    } catch (error) {
        console.error('Failed to fetch profile settings:', error);
        // Fallback default
        return {
            name: 'Rizky Haffiyan Roseno',
            title: 'Backend Engineer · Go · Microservices · Cloud',
            bio: 'Passionate about building high-performance APIs, cloud-native architectures, and scalable backend systems that power exceptional user experiences.',
            avatarUrl: '/profile.jpg',
            aboutSubtitle: 'Backend engineer yang fokus pada hasil: reliabel, terukur, dan sederhana untuk dioperasikan.',
            aboutDescription1: 'Saya membangun backend yang cepat dan robust dengan Go, fokus pada microservices, transaksi konsisten, dan API ber-throughput tinggi.',
            aboutDescription2: 'Beberapa hasil: memangkas p95 response hingga 40% lewat indexing dan caching, meningkatkan uptime jadi 99.9% dengan observability dan circuit breaker, serta menurunkan waktu rilis lewat CI/CD yang rapih.',
            aboutDescription3: 'Prinsip saya: kirim bernilai bisnis, ukur dengan metrik, dan jaga agar sistem mudah dirawat.',
            coreExpertise: [
                { name: 'Backend Development', percentage: 95 },
                { name: 'Golang', percentage: 90 },
                { name: 'Database Design', percentage: 85 },
                { name: 'System Architecture', percentage: 80 }
            ],
            location: 'Jakarta, Indonesia',
            email: 'rihanodev@gmail.com',
            phone: '+62 812-3456-7890'
        };
    }
};
