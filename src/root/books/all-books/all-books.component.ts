import { Book } from "./book.model";
import { MyRestService } from "../../services/myrest.service";
import { Component, OnInit } from "@angular/core";
import { CanComponentDeactivate } from "../../services/can-deactivate-guard.service";
import { Observable } from "rxjs";
import { HttpErrorResponse } from "../../../../node_modules/@angular/common/http";

@Component({
    selector: 'all-books',
    templateUrl: 'all-books.component.html',
    styleUrls: ['all-books.component.css']
})
export class AllBooksComponent implements  CanComponentDeactivate{
    books: Book[] = null;
    errorMessage:string =null;
    requestInProgress:boolean = false;

    constructor(private restService: MyRestService){}

    onFetch(){
        this.books = null;
        this.errorMessage = null;
        this.requestInProgress = true;
        this.restService.getAllBooks().subscribe(
            (books: Book[]) => { this.books = books; this.requestInProgress = false;} ,
            (error: HttpErrorResponse) => { this.errorMessage = 'Error connecting to server'; this.requestInProgress = false; } 
        );
    }

    canDeactivate(){
        return confirm('Do you want to leave the books page?');
    }

}