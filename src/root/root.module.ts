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
        ShortenPipe
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