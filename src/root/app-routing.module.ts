import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from "./login/login.component";
import { CountriesComponent } from "./countries/countries.component";
import { PageNotFoundComponent } from "./not-found.component";
import { CanDeactivateGuard } from "./services/can-deactivate-guard.service";
import { AllBooksComponent } from "./books/all-books/all-books.component";
import { SearchBookComponent } from "./books/search-books/search-books.component";
import { BooksComponent } from "./books/books.component";
import { JokesComponent } from "./jokes/jokes.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canDeactivate: [CanDeactivateGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'countries', component: CountriesComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'jokes', component: JokesComponent   },
    { path: 'books', component: BooksComponent, children: [
            { path: 'all', component: AllBooksComponent, canDeactivate: [CanDeactivateGuard]},
            { path: 'search', component: SearchBookComponent, canDeactivate: [CanDeactivateGuard] },
            { path: '', redirectTo: 'all', pathMatch: 'full'}
        ] 
    },
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