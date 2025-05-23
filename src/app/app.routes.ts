import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
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
];
