import { Component } from "@angular/core";

@Component({
    selector: "ngclass-example",
    template: `<h4>NgClass</h4>
  <ul *ngFor="let person of people">
    <li [ngClass]="{
    'text-success':person.country === 'UK',
    'text-primary':person.country === 'USA',
    'text-danger':person.country === 'HK'
    }">
    {{ person.name }} ({{ person.country }})
    </li>
  </ul>
  
  
  <ul *ngFor="let person of people">
    <li [class.text-success]="person.country === 'UK'"
        [class.text-primary]="person.country === 'USA'"
        [class.text-danger]="person.country === 'HK'">
      {{ person.name }} ({{ person.country }})
    </li>
  </ul>
  
   `
})
export class NgClassExampleComponent {
    people: any[] = [
        {
            name: "Douglas  Pace",
            age: 35,
            country: "UK"
        },
        {
            name: "Mcleod  Mueller",
            age: 32,
            country: "USA"
        },
        {
            name: "Day  Meyers",
            age: 21,
            country: "HK"
        },
        {
            name: "Aguirre  Ellis",
            age: 34,
            country: "UK"
        },
        {
            name: "Cook  Tyson",
            age: 32,
            country: "USA"
        }
    ];
}