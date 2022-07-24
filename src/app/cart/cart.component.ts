import { product } from './../Models/product';
import { cartItem } from './../Models/cartItem';
import { observable, Observable } from 'rxjs';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice:number=0;
  constructor(private cServiece:CartService) { }
  cartItems:cartItem[];
  ngOnInit(): void {
    this.cServiece.purcahsedProducts.subscribe(val=>{
      this.cartItems=val;
      this.totalPrice=0;
      this.calcTotalPrice();
    });

  }
  calcTotalPrice(){
    this.cartItems.forEach(res=>this.totalPrice+=(res.product.price*res.quantity));
  }

}
