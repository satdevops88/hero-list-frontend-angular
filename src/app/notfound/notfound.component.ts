import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-not-found',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss']
})

export class NotFoundComponent {

    constructor(private router: Router) { }

    goback() {
        this.router.navigate(['/heros-list']);
      //window.history.back();
    }

}