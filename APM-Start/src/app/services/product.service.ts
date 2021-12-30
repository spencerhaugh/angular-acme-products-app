import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Product } from "../components/product-list/Product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {
        
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    handleError(err: HttpErrorResponse) {
        let errorMsg = '';
        if (err.error instanceof ErrorEvent) {
            errorMsg = `An error occured: ${err.error.message}`
        } else {
            errorMsg = `Server error. Code ${err.status}. Error message: ${err.message}`
        }
        console.log(errorMsg);
        return throwError(errorMsg);
    }
}