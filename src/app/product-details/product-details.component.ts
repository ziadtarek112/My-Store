import { cartItem } from './../Models/cartItem';
import { CartService } from './../services/cart.service';
import { product } from './../Models/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number;
  Quantity:number=1;
  productdetail:product;
  cartItemHolder:cartItem=new cartItem;
  constructor(private PService:ProductsService,private activeRoute:ActivatedRoute,private cServiece:CartService) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.PService.fetchData().subscribe(res=>this.productdetail=res[this.id-1])
    })
  }
  onAddToCart(p:product){
    this.cartItemHolder.product=p;
    this.cartItemHolder.quantity=this.Quantity;
    this.cServiece.addProduct(this.cartItemHolder);
    alert('Item added')
  }
}
