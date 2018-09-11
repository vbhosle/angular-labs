import { Country } from "./country.model";
import { MyRestService } from "../services/myrest.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'all-countries',
    templateUrl: 'all-countries.component.html'
})
export class AllCountriesComponent implements OnInit{
    countries: Country[];
    
    constructor(private restService: MyRestService){}

    onFetch(){
        this.restService.getAllCountries().subscribe(
            (response) => {
                    console.log(response);
             } 
        );        
    }
    
    ngOnInit(){
        this.onFetch();
    }

}