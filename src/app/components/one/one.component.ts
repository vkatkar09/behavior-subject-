import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import {TwoComponent} from '../two/two.component'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  name:string;
  constructor(private usersService:UsersService, private comp: TwoComponent) { }

  ngOnInit() {
    //this.usersService.cast.subscribe(user=> this.userOneForm = user);
    //console.log(this.user)
  }
  
  userOneForm = new FormGroup({
    name: new FormControl('chandu'),
    age: new FormControl('20')
}); 

  editTheUser(){
    this.userOneForm.controls['name'].setValue(this.name)
    console.log(this.userOneForm.controls['name'].value)
    this.usersService.editUser(this.userOneForm);
    this.comp.updateFormTwo()
  }

}
