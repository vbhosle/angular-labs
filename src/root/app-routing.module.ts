import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from "./login/login.component";
import { CountriesComponent } from "./countries/countries.component";
import { PageNotFoundComponent } from "./not-found.component";
import { CanDeactivateGuard } from "./services/can-deactivate-guard.service";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canDeactivate: [CanDeactivateGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'countries', component: CountriesComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [CanDeactivateGuard],
    exports: [RouterModule]
})
export class AppRoutingModule {

}