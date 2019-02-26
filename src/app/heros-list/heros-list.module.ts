import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HerosListRoutingModule } from "./heros-list-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { HerosListComponent } from './heros-list.component';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        InfiniteScrollModule,
        FilterPipeModule,
        FormsModule,
        HerosListRoutingModule,
        NgbModule,
        MatchHeightModule
    ],
    declarations: [
        HerosListComponent
    ]
})
export class HerosListModule { }
