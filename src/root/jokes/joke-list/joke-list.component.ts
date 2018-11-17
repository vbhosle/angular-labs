import { Joke } from "../joke.model";
import { Component, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit } from "@angular/core";
import { JokeComponent } from "../joke/joke.component";

@Component({
    selector: "joke-list",
    template: `
  <joke-form (jokeCreated)="addJoke($event)"></joke-form>
  <button type="button"
        class="btn btn-danger"
        (click)="deleteJoke()">Clear Jokes
    </button>
  <h2>View Jokes</h2>
  <joke *ngFor="let j of jokes" [joke]="j">
    <span class="setup">{{ j.setup }}</span>
    <h1 class="punchline">{{ j.punchline }}</h1>
  </joke>
  <h2>Content Jokes</h2>
  <ng-content></ng-content>
    `
})
export class JokeListComponent
    implements AfterViewInit,
    AfterContentInit 
{
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

    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
    @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

    constructor() {
        console.log(`JokeListComponent: new - jokeViewChild is ${this.jokeViewChild}`);
    }

    ngAfterContentInit(){
        console.log(`JokeListComponent: AfterContentInit - jokeContentChild is ${this.jokeContentChild.data.setup}`);

    }

    ngAfterViewInit() {
        console.log(`JokeListComponent: AfterViewInit - jokeViewChild is ${this.jokeViewChild.data.setup}`);
        console.log(`JokeListComponent: AfterViewInit - # of jokeViewChild ${this.jokeViewChildren.length}`);
    }

    addJoke(joke) {
        this.jokes.unshift(joke);
    }

    deleteJoke() {
        this.jokes = [];
    }
}