import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../forms';

export const mainRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
];


export const MainRoutes = RouterModule.forRoot(mainRoutes);