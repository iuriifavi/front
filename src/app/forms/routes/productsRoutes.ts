import { RouterModule, Routes } from '@angular/router';

import { ProductsResolver, ProductResolver } from '../../services';

import { ProductComponent } from '../product/product.component';
import { ListViewComponent } from '../list-view/list-view.component';

import { Product } from '../../cls';

export const productsRoutes: Routes = [
    {
        path: 'products',
        component: null,
        children: [
            { path: '',
              component: ListViewComponent,
              resolve: {
                list: ProductsResolver
              }
            },
            { path: 'new',
            component: ProductComponent,
            data: {
              product: new Product,
              editable: true
            }
          },
            { path: 'view/:id',
              component: ProductComponent,
              resolve: {
                product: ProductResolver
              },
            },
            { path: 'edit/:id',
            component: ProductComponent,
            resolve: {
              product: ProductResolver
            },
            data: {
              editable: true
            }
          }
        ],
    },
];

export const ProductsRoutes = RouterModule.forChild(productsRoutes);
