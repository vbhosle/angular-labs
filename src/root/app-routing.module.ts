import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from "./login/login.component";
import { CountriesComponent } from "./countries/countries.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'countries', component: CountriesComponent },
    // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}