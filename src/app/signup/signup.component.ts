import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm= new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
    mobile: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    gender: new FormControl("",[Validators.required]),
    address: new FormControl("")


  })
  consoleForm(){
    console.log(this.signupForm.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
