import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from "./login/login.component";
import { CountriesComponent } from "./countries/countries.component";
import { PageNotFoundComponent } from "./not-found.component";
import { CanDeactivateGuard } from "./services/can-deactivate-guard.service";
import { AllBooksComponent } from "./books/all-books/all-books.component";
import { SearchBookComponent } from "./books/search-books/search-books.component";
import { BooksComponent } from "./books/books.component";
import { CodecraftComponent } from "./codecraft/codecraft.component";
import { JokesComponent } from "./codecraft/jokes/jokes.component";
import { BuiltInDirectivesComponent } from "./codecraft/built-in-directives/built-in-directives.component";
import { NgForExampleComponent } from "./codecraft/built-in-directives/ng-for-example.component";
import { NgIfExampleComponent } from "./codecraft/built-in-directives/ng-if-example.component";
import { NgSwitchExampleComponent } from "./codecraft/built-in-directives/ng-switch-example.component";
import { NgStyleExampleComponent } from "./codecraft/built-in-directives/ng-style-example.component";
import { NgClassExampleComponent } from "./codecraft/built-in-directives/ng-class-example.component";
import { CustomDirectivesComponent } from "./codecraft/custom-directives/custom-directives.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, canDeactivate: [CanDeactivateGuard] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'countries', component: CountriesComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'codecraft', component: CodecraftComponent, children: [
            { path: 'built-in-directives', component: BuiltInDirectivesComponent, children: [
                    { path: 'ngForExample', component: NgForExampleComponent },
                    { path: 'ngIfExample', component: NgIfExampleComponent },
                    { path: 'ngSwitchExample', component: NgSwitchExampleComponent},
                    { path: 'ngStyleExample', component: NgStyleExampleComponent},
                    { path: 'ngClassExample', component: NgClassExampleComponent},
                    { path: '', redirectTo: 'ngForExample',  pathMatch: 'full' }
                ]
            } ,
            { path: 'custom-directives', component: CustomDirectivesComponent },
            { path: '', component: JokesComponent,  pathMatch: 'full' }

        ] 
    },
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