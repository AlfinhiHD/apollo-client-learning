import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoManagementRoutingModule } from './promo-management-routing.module';
import { PromoManagementComponent } from './promo-management.component';
import { AddPromoFormComponent } from './add-promo-form/add-promo-form.component';
import { PromoCardListComponent } from './promo-card-list/promo-card-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PromoManagementComponent,
    AddPromoFormComponent,
    PromoCardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PromoManagementRoutingModule
  ]
})
export class PromoManagementModule { }
