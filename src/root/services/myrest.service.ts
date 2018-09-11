import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyRestService{

    private allCountriesURL:string = 'http://services.groupkt.com/country/get/all';
    private getCountryURL:string = 'http://services.groupkt.com/country/get/iso2code';
    
    constructor(private httpClient: HttpClient){}

    getAllCountries(){
        console.log('subscribed!');
        return this.httpClient.get(this.allCountriesURL);
    }

    getCountryByCode(countryCode: string){
        return this.httpClient.get(`${this.getCountryURL}/${countryCode}`);
    }
}