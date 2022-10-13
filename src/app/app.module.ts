import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { HTTPService } from './shared/http-service';


@NgModule({
  declarations: [
    AppComponent,
    ServiceDetailComponent,
    ServicesComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ["places", "geometry"]
    }),
  ],
  providers: [
    HTTPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
