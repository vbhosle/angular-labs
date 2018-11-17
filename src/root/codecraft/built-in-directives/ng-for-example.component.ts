import { Component } from "@angular/core";

@Component({
    selector: 'ngfor-example',
    template: `
    <h4>NgFor (grouped)</h4>
    <ul *ngFor="let group of peopleByCountry">
      <li>{{ group.country }}</li>
      <ul>
        <li *ngFor="let person of group.people">
          {{ person.name }}
        </li>
      </ul>
    </ul>
        `
})
export class NgForExampleComponent {
    peopleByCountry: any[] = [
        {
          'country': 'UK',
          'people': [
            {
              "name": "Douglas  Pace"
            },
            {
              "name": "Mcleod  Mueller"
            },
          ]
        },
        {
          'country': 'US',
          'people': [
            {
              "name": "Day  Meyers"
            },
            {
              "name": "Aguirre  Ellis"
            },
            {
              "name": "Cook  Tyson"
            }
          ]
        }
      ];
}