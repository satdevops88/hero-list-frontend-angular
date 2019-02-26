import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';
import { NotFoundRoutingModule } from "./notfoundrouting.module";

import { NotFoundComponent } from "./notfound.component";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NotFoundRoutingModule
    ],
    exports: [],
    declarations: [ NotFoundComponent ],
    providers: [],
})
export class NotFoundModule { }
