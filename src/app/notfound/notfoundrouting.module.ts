import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./notfound.component";

const routes: Routes = [
  {
    path: '',
     component: NotFoundComponent,
    data: {
      title: 'Not Found'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule { }
