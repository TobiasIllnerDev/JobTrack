import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Board } from './pages/board/board';
import { Register } from './pages/register/register';
import { NotFound } from './pages/not-found/not-found';
import { Applications } from './pages/applications/applications';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'board',
        component: Board,
    },
    {
        path: 'register',
        component: Register,
    },
    {
        path: 'applications',
        component: Applications,
    },
    {
        path: 'settings',
        component: Settings,
    },
    {
        path: '**',
        component: NotFound,
    }
];
