import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolTableComponent } from './school-table/school-table.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolTableComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsManagementRoutingModule { }
