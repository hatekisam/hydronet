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
import { MainComponent } from './pages/main/main.component';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { MainSearchComponent } from './pages/main-search/main-search.component';
import { MainRegisterComponent } from './pages/main-register/main-register.component';
import { MainRegisterCompanyComponent } from './pages/main-register-company/main-register-company.component';
import { MainRegisterPermitCertificatesComponent } from './pages/main-register-permit-certificates/main-register-permit-certificates.component';

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
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainHomeComponent,
      },
      {
        path: 'search',
        component: MainSearchComponent,
      },
      {
        path: 'register',
        component: MainRegisterComponent,
        children: [
          {
            path: 'company',
            component: MainRegisterCompanyComponent,
          },
          {
            path: 'permit-certificates',
            component: MainRegisterPermitCertificatesComponent,
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
