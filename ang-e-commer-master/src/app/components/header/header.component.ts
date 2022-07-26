import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/common/role';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser : User = new User();

  constructor(private authenticationService :AuthenticationService, private router: Router) { 
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data
    })
  }

  isAdmin(){
    return this.currentUser?.role === Role.ADMIN
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
