import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { login } from '../Model/login';
import { ProcessService } from '../Process/process.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logininfo = new login();

  constructor(private loginAuth: ProcessService, private router: Router) { }
  loginform = new FormGroup({
    login_username: new FormControl("", [Validators.required, Validators.max(50), Validators.min(10)]),
    login_password: new FormControl("", [Validators.required])
    
  });

  get logindetails() {
    return this.loginform.controls;
  }

  loginsubmited() {
    this.logininfo.UserName = this.loginform.value.login_username as string;
    this.logininfo.PassWord = this.loginform.value.login_password as string;


    this.loginAuth
      .loginUser([this.logininfo.UserName, this.logininfo.PassWord])
      .subscribe({
        next: (res) => {
          if (res == null) {
            alert("Check Your Credentials");
          } else {
            this.router.navigate(['admin']);
          }
        }
      });

  }
}
