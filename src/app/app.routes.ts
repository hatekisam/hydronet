import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValidateDrillerComponent } from './pages/validate-driller/validate-driller.component';
import { RenewComponent } from './pages/renew/renew.component';
import { ApplyDrillerComponent } from './pages/apply-driller/apply-driller.component';
import { ApplyBoreholeComponent } from './pages/apply-borehole/apply-borehole.component';
import { RequestWaterComponent } from './pages/request-water/request-water.component';
import { ValidateDrillSearchResultsComponent } from './pages/validate-drill-search-results/validate-drill-search-results.component';

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
    path: 'validate-drill/search',
    component: ValidateDrillSearchResultsComponent,
  },
];
