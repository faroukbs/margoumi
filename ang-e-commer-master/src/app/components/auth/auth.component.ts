import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: User = new User();
  userLogin: User = new User();
  errorMessage: string = "";
  errorMessageLogin: string = "";
  constructor(private authenticationService :AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationService.currentUserValue?.id){
      this.router.navigate(['/'])
      return;
    }
  }

  register() {
    this.authenticationService.register(this.user).subscribe(data => {
      this.router.navigate(['/login']);
    }, err => {
      if(err?.status === 409 ){
        this.errorMessage = 'Username alrady exist'
      } else {
        this.errorMessage = 'Unxpected error. Erro is: '+ err?.errorMessage;
        console.log(err);
      }
    }) 
  }

  login(){
    this.authenticationService.login(this.userLogin).subscribe(data => {
      this.router.navigate(['/']);
    }, err => {  
        this.errorMessageLogin = 'Unxpected error. Erro is: '+ err?.errorMessageLogin;
        console.log(err);
    }) 
  }

}
