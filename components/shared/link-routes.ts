export interface RouterLink {
    name: string;
    path: string;
    title: string;
}

export const routeLinks: RouterLink[] = [
    { path: '/', name: 'inicio', title: 'Inicio' },
    { path: '/home', name: 'home', title: 'Home' },
    { path: '/test', name: 'test', title: 'Test' },
    { path: '/character', name: 'Personajes', title: 'Personajes' },
    { path: '/app', name: 'app', title: 'App' }
]
export const subRouteLinks: RouterLink[] = [
    { path: '/character/', name: 'inicio', title: 'Inicio' },
    { path: '/character/list', name: 'Personajes', title: 'Personajes' },
    { path: '/character/search', name: 'busqueda', title: 'App' }
]