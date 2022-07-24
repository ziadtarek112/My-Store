import { cartItem } from './../Models/cartItem';
import { product } from './../Models/product';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  quantity:number=1;
  cartItemHolder:cartItem=new cartItem();
  @Input()productCard:product;
  @Output() addToCart:EventEmitter<cartItem>=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(c:product){
    this.cartItemHolder.product=c;
    this.cartItemHolder.quantity=this.quantity;
    this.addToCart.emit(this.cartItemHolder);
}
}
