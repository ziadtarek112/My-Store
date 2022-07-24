import { Users } from './../Models/Users';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  name:string='';
  address:string='';
  creditCard:number;
  user:Users=new Users();
  constructor( private users:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.name);
    console.log(this.address);
    console.log(this.creditCard);

    this.user.name=this.name;
    this.user.address=this.address;
    this.user.CreditCardNumber=this.creditCard;
    this.users.confirmPurchase(this.user);
  }

}
