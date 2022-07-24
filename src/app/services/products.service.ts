import { product } from '../Models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: product[];
  constructor(private http: HttpClient) { }
  fetchData(): Observable<product[]> {
    return this.http.get<product[]>('../../assets/data.json');
  }

  // fetchDatabyId(id: number) {
  //   this.fetchData().subscribe(res => { this.products = res })
  //   return this.products[id-1];
  // }
}
