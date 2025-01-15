import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPlanetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class NasaModule { }
