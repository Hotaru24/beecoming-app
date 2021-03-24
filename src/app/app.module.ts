import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PieComponent } from './pie/pie.component';
import { LineComponent } from './line/line.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PieComponent,
    LineComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
