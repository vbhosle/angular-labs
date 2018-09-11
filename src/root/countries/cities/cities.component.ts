import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { MyService } from "../../services/myservice.service";

@Component({
    selector: 'cities',
    templateUrl: './cities.component.html'
})
export class CitiesComponent implements OnInit, OnChanges{

    private cities: string[];
    @Input() private country: string;
    @Output() private selectedCity = new EventEmitter<string>();

    constructor(private countriesService: MyService){}

    ngOnInit(){
        this.cities = this.countriesService.getCities(this.country);
    }

    ngOnChanges(data: SimpleChanges){
        this.cities = this.countriesService.getCities(data.country.currentValue);   
    }
    
    onCitySelected(city:string){
        this.selectedCity.emit(city);
    }
}