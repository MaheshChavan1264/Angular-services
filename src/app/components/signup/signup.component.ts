import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  user: User;

  registerForm= new FormGroup({
    firstName: new FormControl(),
    lasstName: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
  });

  constructor(private userService: UserService  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const newUser: User = this.registerForm.value;
    this.userService.addUser(newUser);
   }

}
