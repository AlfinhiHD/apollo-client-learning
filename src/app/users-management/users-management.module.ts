import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersManagementRoutingModule
  ]
})
export class UsersManagementModule { }
