import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  user:string;

  userTwoForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
});

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    
  }

  updateFormTwo(){
    this.usersService.cast.subscribe(user=> this.userTwoForm = user);
    console.log(this.userTwoForm)
  }


}
