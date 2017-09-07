import { RouterModule, Routes } from '@angular/router';

import { PodatkovaComponent } from '../podatkova/podatkova.component';

export const printRoutes: Routes = [
    {
        path: 'print',
        component: null,
        children: [
            { path: 'podatkova',
              component: PodatkovaComponent,
            },
        ],
    },
];

export const PrintRoutes = RouterModule.forChild(printRoutes);
