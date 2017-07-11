import { Routes } from '@angular/router';

import { ClientsResolver, ClientResolver } from '../services';

import { ClientComponent, ListViewComponent } from '../components';

export const clientsRoutes: Routes = [
    {
        path: 'clients',
        component: ListViewComponent,
        children: [
            { path: '',
              component: ListViewComponent,
              resolve: {
                items: ClientsResolver
              }
            },
            { path: ':id',
              component: ClientComponent,
              resolve: {
                client: ClientResolver
              },
            }
        ],
    },
];