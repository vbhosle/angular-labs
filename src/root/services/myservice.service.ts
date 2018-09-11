import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private countries: Map<string, string[]> = new Map([
                                                      ['INDIA', ['Mumbai', 'Delhi']],
                                                      ['INDONESIA', ['Jakarta', 'Surabaya']],                                                      
                                                      ['IRELAND', ['Dublin', 'Galway']],
                                                      ['USA', ['California', 'New York']],
                                                      ['UK', ['London', 'Liverpool']]
                                                    ]);
  constructor() { }

  getCountries():string[]{
    return Array.from(this.countries.keys());
  }

  getCities(country: string):string[]{
    return this.countries.get(country);
  }
}
