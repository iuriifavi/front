import { Routes } from '@angular/router';

import { ProductsResolver, ProductResolver } from '../services';

import { ProductComponent, ListViewComponent } from '../components';

export const productsRoutes: Routes = [
    {
        path: 'products',
        component: ListViewComponent,
        children: [
            { path: '',
              component: ListViewComponent,
              resolve: {
                items: ProductsResolver
              }
            },
            { path: ':id',
              component: ProductComponent,
              resolve: {
                client: ProductResolver
              },
            }
        ],
    },
];