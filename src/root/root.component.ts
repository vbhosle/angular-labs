import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent{

    componentTitle: string = 'Angular Labs';
    fontColor: string = 'blue';
    
}