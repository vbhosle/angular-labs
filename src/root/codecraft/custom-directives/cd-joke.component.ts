import { Component, Input } from "@angular/core";
import { Joke } from "../jokes/joke.model";

@Component({
    selector: 'cd-joke',
    template: `
    <div class="panel panel-default" [ccCardHover] = "{querySelector: '.card-text'}">
        <h4 class="panel-heading">
            <ng-content select=".setup"></ng-content>
        </h4>
        <div class="panel-body">
            <p class="card-text" [style.display]="'none'">
                {{ data.punchline }}
            </p>
        </div>
    </div>
    `
})
export class CDJokeComponent{
    @Input('joke') data: Joke;
}