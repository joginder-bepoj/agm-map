import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MapComponent
  },
  {
    path: 'service/:id',
    component: ServiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
