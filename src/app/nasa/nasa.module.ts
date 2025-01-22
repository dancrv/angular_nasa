import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NasaPicComponent } from './components/nasa-pic/nasa-pic.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    NasaPicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MainPageComponent,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class NasaModule { }
