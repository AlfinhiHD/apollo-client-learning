import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoManagementComponent } from './promo-management.component';

const routes: Routes = [
  {
    path: '',
    component: PromoManagementComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoManagementRoutingModule { }
