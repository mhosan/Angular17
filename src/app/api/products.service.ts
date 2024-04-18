import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly _http = inject(HttpClient);
  
  getAllProducts():Observable<any>{
    return this._http.get('https://fakestoreapi.com/products').pipe(
      catchError(error => {
        console.clear();
        console.log(`Error. Código de error: ${error.status}, mensaje: ${error.message}`);
        return throwError(error);
      })
    );
  }
}
