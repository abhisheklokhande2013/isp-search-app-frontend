import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IspCRUDComponent } from './isp-crud/isp-crud.component';
import { IspDashboardComponent } from './isp-dashboard/isp-dashboard.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: IspDashboardComponent },
  { path: 'crudoperaions', component: IspCRUDComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
