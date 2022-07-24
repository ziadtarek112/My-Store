import { Component, OnInit } from '@angular/core';
import { Users } from '../Models/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  user:Users=new Users();
  constructor(private uServiece:UserService) { }

  ngOnInit(): void {
    console.log("alooooooooooo");

    this.user=this.uServiece.getUser();

  }

}
