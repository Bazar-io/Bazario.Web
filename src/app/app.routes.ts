import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { MainComponent } from './features/main/main.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                'path': '',
                'component': MainComponent,
                'pathMatch': 'full'
            }
        ]
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                'path': 'login',
                'component': LoginComponent,
                'pathMatch': 'full'
            },
            {
                'path': 'register',
                'component': RegisterComponent,
                'pathMatch': 'full'
            }
        ]
    },
    {
        path: '**',
        component: MainLayoutComponent,
        children: [
            {
                'path': '**',
                'component': NotFoundComponent,
            }
        ]
    }
];
