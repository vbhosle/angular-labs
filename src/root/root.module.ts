import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { RootComponent } from "./root.component";
import { LoginComponent } from "./login/login.component";
import { InputValidator } from "./directives/validate.directive";
import { MyService } from "./services/myservice.service";
import { CountriesComponent } from "./countries/countries.component";
import { CitiesComponent } from "./countries/cities/cities.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./not-found.component";
import { AllBooksComponent } from "./books/all-books/all-books.component";
import { MyRestService } from "./services/myrest.service";
import { HttpClientModule } from "@angular/common/http";
import { ShortenPipe } from "./pipes/shorten.filter";
import { SearchBookComponent } from "./books/search-books/search-books.component";
import { BooksComponent } from "./books/books.component";
import { JokeFormComponent } from "./codecraft/jokes/joke-form/joke-form.component";
import { JokeListComponent } from "./codecraft/jokes/joke-list/joke-list.component";
import { JokeComponent } from "./codecraft/jokes/joke/joke.component";
import { JokesComponent } from "./codecraft/jokes/jokes.component";
import { CodecraftComponent } from "./codecraft/codecraft.component";
import { BuiltInDirectivesComponent } from "./codecraft/built-in-directives/built-in-directives.component";
import { NgForExampleComponent } from "./codecraft/built-in-directives/ng-for-example.component";
import { NgIfExampleComponent } from "./codecraft/built-in-directives/ng-if-example.component";
import { NgSwitchExampleComponent } from "./codecraft/built-in-directives/ng-switch-example.component";

@NgModule({
    declarations: [
        RootComponent,
        LoginComponent,
        CountriesComponent,
        CitiesComponent,
        BooksComponent,
        AllBooksComponent,
        SearchBookComponent,
        PageNotFoundComponent,
        InputValidator,
        FilterPipe,
        ShortenPipe,
        JokeFormComponent,
        JokeComponent,
        JokeListComponent,
        JokesComponent,
        CodecraftComponent,
        BuiltInDirectivesComponent,
        NgForExampleComponent,
        NgIfExampleComponent,
        NgSwitchExampleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [MyService, MyRestService],
    bootstrap: [RootComponent]
})
export class Angular2{
    
}