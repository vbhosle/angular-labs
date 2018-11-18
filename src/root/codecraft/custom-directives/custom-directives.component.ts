import { Component } from "@angular/core";
import { Joke } from "../jokes/joke.model";

@Component({
    selector: 'custom-directives',
    template: `
        <cd-joke *ngFor="let j of jokes" [joke]="j">
            <span class="setup">{{ j.setup }}</span>
            <h1 class="punchline">{{ j.punchline }}</h1>
        </cd-joke>
    `
})
export class CustomDirectivesComponent{
    jokes: Joke[] = [
        new Joke(
            "What did the cheese say when it looked in the mirror?",
            "Hello-me (Halloumi)"
        ),
        new Joke(
            "What kind of cheese do you use to disguise a small horse?",
            "Mask-a-pony (Mascarpone)"
        )
    ];
}