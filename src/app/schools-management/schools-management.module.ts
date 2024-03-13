import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsManagementRoutingModule } from './schools-management-routing.module';
import { SchoolTableComponent } from './school-table/school-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SchoolTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SchoolsManagementRoutingModule
  ]
})
export class SchoolsManagementModule { }
