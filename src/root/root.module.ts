import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { RootComponent } from "./root.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        RootComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [RootComponent]
})
export class Angular2{
    
}