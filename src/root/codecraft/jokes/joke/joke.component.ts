import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from "@angular/core";
import { Joke } from "../joke.model";

@Component({
  selector: 'joke',
  templateUrl: 'joke.component.html'
})
export class JokeComponent
  // implements
  // OnChanges,
  // OnInit,
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy 
  {
  @Input('joke') data: Joke;

  // ngOnChanges() {
  //   console.log(`ngOnChanges - ${this.data.setup}`);
  // }

  // ngOnInit() {
  //   console.log(`ngOnInit - ${this.data.setup}`);
  // }

  // ngDoCheck() {
  //   console.log(`ngDoCheck - ${this.data.setup}`)
  // }

  // ngAfterContentInit() {
  //   console.log(`ngAfterContentInit - ${this.data.setup}`);
  // }

  // ngAfterContentChecked() {
  //   console.log(`ngAfterContentChecked - ${this.data.setup}`);
  // }

  // ngAfterViewInit() {
  //   console.log(`ngAfterViewInit - ${this.data.setup}`);
  // }

  // ngAfterViewChecked() {
  //   console.log(`ngAfterViewChecked - ${this.data.setup}`);
  // }

  // ngOnDestroy() {
  //   console.log(`ngOnDestroy - ${this.data.setup}`);
  // }
}