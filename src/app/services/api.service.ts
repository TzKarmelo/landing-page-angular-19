import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly _http = inject(HttpClient);
  private readonly urlBase : string = 'https://fakestoreapi.com/products';

  getProducts() : Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getProduct(id: number) : Observable<IProduct> {
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }
}
