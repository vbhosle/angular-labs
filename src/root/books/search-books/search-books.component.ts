import { Book } from "../all-books/book.model";
import { MyRestService } from "../../services/myrest.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "../../../../node_modules/@angular/common/http";
import { CanComponentDeactivate } from "../../services/can-deactivate-guard.service";

@Component({
    selector: 'search-books',
    templateUrl: 'search-books.component.html',
    styleUrls: ['search-books.component.css']
})
export class SearchBookComponent implements CanComponentDeactivate{
    book: Book;
    bookID: number;
    errorMessage: string = null;
    requestInProgress: boolean = false;

    constructor(private restService: MyRestService) { }

    onSearch() {
        this.book = null;
        this.errorMessage = null;
        this.requestInProgress = true;
        this.restService.getBookById(this.bookID).subscribe(
            (book: Book) => { this.book = book; this.requestInProgress = false; },
            (error: HttpErrorResponse) => {
                if (error.status == 404) {
                    this.errorMessage = 'Book not found';
                } else {
                    this.errorMessage = 'Error connecting to server';
                }
                this.requestInProgress = false;
            }
        );
    }


    canDeactivate() {
        return confirm('Do you want to leave the book search page?');
    }

}