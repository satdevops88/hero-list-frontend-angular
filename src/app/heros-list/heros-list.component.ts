import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'heros-list',
    templateUrl: './heros-list.component.html',
    styleUrls: ['./heros-list.component.scss']
})

export class HerosListComponent {
    heros:any;
    heroAttrs:any = [];
    length: number;
    userFilter: any = { name:''};

    constructor(private http: Http) {
        http.get('https://powerful-stream-78352.herokuapp.com/heros')
            .subscribe(res => {
                this.heros = res.json();
                this.length = this.heros.length;
                this.heros.forEach(hero => {
                    var obj = JSON.parse(hero.attr);
                    var heroAttr:any = {};
                    heroAttr.name = obj.name;
                    heroAttr.slug = obj.slug;
                    heroAttr.image_portrait = obj.image_portrait;
                    heroAttr.image_background = obj.image_splash;
                    this.heroAttrs.push(heroAttr);
                });
            })
    }

    onScroll() {
        for(let i = 0; i < this.length; i++){
            this.heroAttrs.push(this.heroAttrs[i]);
        }
    }

}