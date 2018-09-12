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

@NgModule({
    declarations: [
        RootComponent,
        LoginComponent,
        CountriesComponent,
        CitiesComponent,
        PageNotFoundComponent,
        InputValidator,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [MyService],
    bootstrap: [RootComponent]
})
export class Angular2{
    
}