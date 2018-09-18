import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../books/all-books/book.model";

@Injectable()
export class MyRestService{

    private booksURL:string = 'https://fakerestapi.azurewebsites.net/api/Books';
    
    constructor(private httpClient: HttpClient){}

    getAllBooks(){
        console.log('subscribed!');
        return this.httpClient.get<Book[]>(this.booksURL);
    }

    getBookById(id: number){
        return this.httpClient.get<Book>(this.booksURL+"/"+id);
    }
}