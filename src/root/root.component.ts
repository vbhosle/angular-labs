import { Component } from "@angular/core";
import { MyService } from "./services/myservice.service";

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent{

    constructor(private service:MyService){
        console.log(service.getCountries());
        console.log(service.getCities('USA'));
    }
    private componentTitle: string = 'Root Component';
    private fontColor: string = 'blue';
    
}