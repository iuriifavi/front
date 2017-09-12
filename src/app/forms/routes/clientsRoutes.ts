import { RouterModule, Routes } from '@angular/router';

import { ClientsResolver, ClientResolver } from '../../services';

import { ClientComponent } from '../client/client.component';
import { ListViewComponent } from '../list-view/list-view.component';

import { Client, ClientDescription } from '../../cls';

export const clientsRoutes: Routes = [
    {
        path: 'clients',
        component: null,
        children: [
            { path: '',
              component: ListViewComponent,
              resolve: {
                list: ClientsResolver
              },
              data: { description: new ClientDescription() }
            },
            { path: 'new',
              component: ClientComponent,
              data: { editable: true, client: new Client() }
            },
            { path: 'show/:id',
              component: ClientComponent,
              resolve: {
                client: ClientResolver
              }
            },
            { path: 'edit/:id',
            component: ClientComponent,
            data: { editable: true },
            resolve: {
              client: ClientResolver
            },
          }
        ],
    },
];


export const ClientsRoutes = RouterModule.forChild(clientsRoutes);