import { Users } from './../Models/Users';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  name:string='';
  address:string='';
  creditCard:number;
  validationForm:FormGroup;
  user:Users=new Users();
  constructor( private users:UserService) { }

  ngOnInit(): void {
    this.validationForm=new FormGroup({
      name:new FormControl('',[
        Validators.required
      ]),
      address:new FormControl('',[
        Validators.required
      ]),
      creditCard:new FormControl('',[
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(16)
      ])
    });
  }

  onChange(change){
    console.log(change + 'i can not find a usage for it in this context :)')
  }
  onSubmit(){
    this.user.name=this.name;
    this.user.address=this.address;
    this.user.CreditCardNumber=this.creditCard;
    this.users.confirmPurchase(this.user);
  }

}
