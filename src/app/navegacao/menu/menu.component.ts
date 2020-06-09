import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})

export class MenuComponent  implements OnInit {

    public isCollapsed:boolean;
    constructor() { 
        this.isCollapsed = true;
    }

    ngOnInit() {
    }

}