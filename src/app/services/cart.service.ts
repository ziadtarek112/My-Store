import { cartItem } from './../Models/cartItem';
import { product } from './../Models/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  purcahsedProducts$: BehaviorSubject<cartItem[]> = new BehaviorSubject<cartItem[]>([]);
  purcahsedProducts: Observable<cartItem[]> = this.purcahsedProducts$.asObservable();
  constructor() { }


  addProduct(c: cartItem) {
    let pItems = this.purcahsedProducts$.getValue()
    this.purcahsedProducts$.next([...pItems, c]);
    console.log(this.purcahsedProducts$.getValue());
  }

  deleteProduct(id: number) {


    // const index=this.purcahsedProducts$.getValue().findIndex(pItem => pItem.product.id === id);
    let updatedList = this.purcahsedProducts$.getValue().filter(pItem => pItem.product.id !== id);
    this.purcahsedProducts$.next(updatedList);

  }

}
