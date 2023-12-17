import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValidateDrillerComponent } from './pages/validate-driller/validate-driller.component';
import { RenewComponent } from './pages/renew/renew.component';
import { ApplyDrillerComponent } from './pages/apply-driller/apply-driller.component';
import { ApplyBoreholeComponent } from './pages/apply-borehole/apply-borehole.component';
import { RequestWaterComponent } from './pages/request-water/request-water.component';
import { ValidateDrillSearchResultsComponent } from './pages/validate-drill-search-results/validate-drill-search-results.component';
import { RenewLicenseComponent } from './pages/renew-license/renew-license.component';
import { OneDrillerComponent } from './pages/one-driller/one-driller.component';
import { RenewLicensePackagesComponent } from './pages/renew-license-packages/renew-license-packages.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ValidateDrillerComponent,
      },
      {
        path: 'renew',
        component: RenewComponent,
      },
      {
        path: 'apply-driller',
        component: ApplyDrillerComponent,
      },
      {
        path: 'apply-borehole',
        component: ApplyBoreholeComponent,
      },
      {
        path: 'request-water-analysis',
        component: RequestWaterComponent,
      },
    ],
  },
  {
    path: 'search',
    component: ValidateDrillSearchResultsComponent,
  },
  {
    path: 'renew-license',
    component: RenewLicenseComponent,
  },
  {
    path: 'renew-license-packages',
    component: RenewLicensePackagesComponent,
  },
  {
    path: 'driller/:id',
    component: OneDrillerComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ValidateDrillerComponent,
      },
      {
        path: 'search',
        component: RenewComponent,
      },
      {
        path: 'register',
        component: HomeComponent,
        children: [
          {
            path: 'company',
            component: ValidateDrillerComponent,
          },
          {
            path: 'permit-certificates',
            component: RenewComponent,
          },
          {
            path: 'user-accounts',
            component: ApplyDrillerComponent,
          },
          {
            path: 'payment',
            component: ApplyBoreholeComponent,
          },
        ],
      },
    ],
  },
];
