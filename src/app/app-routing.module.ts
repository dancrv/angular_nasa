import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaPicComponent } from './nasa/components/nasa-pic/nasa-pic.component';

const routes: Routes = [
  { path: 'picture', component: NasaPicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
