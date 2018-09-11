import { Component, OnInit } from "@angular/core";
import { MyService } from "../services/myservice.service";

@Component({
    selector: 'countries',
    templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit{

    private countries : string[];
    private selectedCountry: string;
    private selectedCity: string;

    constructor(private countriesService: MyService){}

    ngOnInit(){
        this.countries = this.countriesService.getCountries();
    }

    onCountrySelected(country:string){
        this.selectedCountry = country;
        this.selectedCity = '';
    }

    onCitySelected(city:string){
        this.selectedCity = city;
    }
}