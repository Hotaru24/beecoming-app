import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineComponent } from './line/line.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [
  {path: '', component: MapComponent},
  {path: 'pie', component: PieComponent},
  {path: 'line', component: LineComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
