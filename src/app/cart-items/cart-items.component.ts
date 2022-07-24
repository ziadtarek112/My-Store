import { CartService } from './../services/cart.service';
import { cartItem } from './../Models/cartItem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input() cartItemsData:cartItem;
  priceforeachItem:number;
  constructor(private cServiece:CartService) { }

  ngOnInit(): void {
   this.priceforeachItem=this.cartItemsData.product.price*this.cartItemsData.quantity;
  }

  deleteCartItem(item:cartItem){
    this.cServiece.deleteProduct(item.product.id);

    }

}
