import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        console.log('User->',user);
      }
    }catch(error){console.log('Error',error);
    }
  }

  async onloginGoogle(){
    try{
      const user = await this.authSvc.loginGoogle();
       if (user){
         // Todo:CheckEmail
         console.log('User->',user);
       }

    }catch(error){console.log('Error',error)}
  }

  redirectUser(isVerified:boolean){
    if (isVerified){
      this.router.navigate(['admin'])
    } else{
      
    }
    /// redirect -> admin
    // else verified
  }

}
