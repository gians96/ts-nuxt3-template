export interface RouterLink {
    name: string;
    path: string;
    title: string;
}

export const routeLinks: RouterLink[] = [
    { path: '/', name: 'inicio', title: 'Inicio' },
    { path: '/home', name: 'home', title: 'Home' },
    { path: '/test', name: 'test', title: 'Test' },
    { path: '/app', name: 'app', title: 'App' }
]