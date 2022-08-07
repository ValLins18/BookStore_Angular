import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../components/bookstore-app/product-list/model/Book';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private urlAPI = 'http://localhost:3100/api/books'

  htttpOptoins = {
    Headers: new HttpHeaders ({'content-type': 'application/json'})
  }
  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.urlAPI}`)
  }
  retrieveById(id: number) : Observable<Book> {
    return this.httpClient.get<Book>(`${this.urlAPI}/${id}`);
  }
}
