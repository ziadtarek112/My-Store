import { CartService } from './../services/cart.service';
import { cartItem } from './../Models/cartItem';
import { product } from '../Models/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:product[]=[];

  constructor(private fetchedProducts:ProductsService, private cService:CartService) { }

  ngOnInit(): void {
    this.fetchedProducts.fetchData().subscribe(res=>{this.products=res});
  }
  addtoCart(cartitem:cartItem){
    this.cService.addProduct(cartitem);
    alert("Product added")
  }

}
