import {Component} from '@angular/core';

@Component({
    selector: 'hello',
    template: '<p>Hello {{name}}</p>'
})
export class Hello {
    name: string;

    constructor() {
        this.name = 'Angular2 without npm';
    }
}