import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 LoginForm!: FormGroup;
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFrom()
  }
 createFrom(){
  this.LoginForm = this.fb.group({
    email: [''],
    password: ['']
  })
 }
 signIn(){
  this.auth.singIn(this.LoginForm.value.email, this.LoginForm.value.password)
}
createAccout(){
  this.auth.SignUp(this.LoginForm.value.email, this.LoginForm.value.password)

 }
}
