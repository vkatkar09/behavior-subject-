import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormGroup, FormControl } from '@angular/forms';



@Injectable()
export class UsersService {
  userOneForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl('')
  });

  private user = new BehaviorSubject<FormGroup>(this.userOneForm);
  cast = this.user.asObservable();

  constructor( ) { }

  editUser(newUser){
    this.user.next(newUser);

  }

}
