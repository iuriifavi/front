import { RouterModule, Routes } from '@angular/router';


import { PodatkovaComponent } from '../print/podatkova/podatkova.component';

const printRoutes: Routes = [
    {
        path: 'print',
        component: PodatkovaComponent,
        children: [
            { path: 'podatkova',
              component: PodatkovaComponent,
            },
        ],
    },
];

export const PrintRoutes = RouterModule.forChild(printRoutes);
