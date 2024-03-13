import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleCardListComponent } from './title-card-list/title-card-list.component';

const routes: Routes = [
  {
    path: '',
    component: TitleCardListComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleManagementRoutingModule { }
