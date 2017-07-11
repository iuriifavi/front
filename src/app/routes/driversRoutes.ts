import { Routes } from '@angular/router';

import { DriversResolver, DriverResolver } from '../services';

import { DriverComponent, ListViewComponent } from '../components';

export const driversRoutes: Routes = [
    {
        path: 'drivers',
        component: ListViewComponent,
        children: [
            { path: '',
              component: ListViewComponent,
              resolve: {
                items: DriversResolver
              }
            },
            { path: ':id',
              component: DriverComponent,
              resolve: {
                client: DriverResolver
              },
            }
        ],
    },
];