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
  productdetail:product;
  constructor(private PService:ProductsService,private activeRoute:ActivatedRoute,private cServiece:CartService) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.PService.fetchData().subscribe(res=>this.productdetail=res[this.id-1])
    })
  }
  onAddToCart(p:product){
    this.cServiece.addProduct
  }
}
