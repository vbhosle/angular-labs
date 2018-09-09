import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent{

    private componentTitle: string = 'Angular Labs';
    private fontColor: string = 'blue';
    
}