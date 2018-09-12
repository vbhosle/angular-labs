import { Component, OnInit } from "@angular/core";
import { MyService } from "../services/myservice.service";
import { CanComponentDeactivate } from "../services/can-deactivate-guard.service";

@Component({
    selector: 'countries',
    templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit, CanComponentDeactivate{

    private countries : string[];
    private selectedCountry: string;
    private selectedCity: string;
    private filterText:string;

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

    canDeactivate(){
        return confirm('Do you want to leave the countries page?');
    }
}