import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/common/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class RequestBaseService {
  protected currentUser: User = new User();

  protected constructor(
    protected authenticationService: AuthenticationService,
    protected http: HttpClient
  ) {
    this.authenticationService.currentUser.subscribe((data) => {
      this.currentUser = data;
    });
  }

  get getHeaders(): HttpHeaders {
    return new HttpHeaders({
      authorization: `Bearer ${this.currentUser?.token}`,
      'content-type': 'application/json; charset=utf-8',
    });
  }
}
