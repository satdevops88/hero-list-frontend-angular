import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerosListComponent } from './heros-list.component';

const routes: Routes = [
    {
        path: '',
        component: HerosListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HerosListRoutingModule { }
