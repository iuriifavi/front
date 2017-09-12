import { RouterModule, Routes } from '@angular/router';

import { DriversResolver, DriverResolver } from '../../services';

import { DriverComponent } from '../driver/driver.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { Driver, DriverDescription } from '../../cls';

export const driversRoutes: Routes = [
    {
        path: 'drivers',
        component: null,
        children: [
            { path: 'new',
              component: DriverComponent,
              data: {
                driver: new Driver(),
                editable: true
              }
            },
            { path: 'show/:id',
              component: DriverComponent,
              resolve: {
                driver: DriverResolver
              }
            },
            { path: '',
              component: ListViewComponent,
              resolve: {
                list: DriversResolver
              },
              data: { description: new DriverDescription() }
            }
        ],
    },
];


export const DriversRoutes = RouterModule.forChild(driversRoutes);