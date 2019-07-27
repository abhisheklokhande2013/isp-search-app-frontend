import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IspCRUDComponent } from './isp-crud/isp-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { IspDashboardComponent } from './isp-dashboard/isp-dashboard.component';
import { IspListComponent } from './isp-dashboard/isp-list/isp-list.component';
import { IspInfoComponent } from './isp-dashboard/isp-info/isp-info.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, IspCRUDComponent, IspDashboardComponent, IspListComponent, IspInfoComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
