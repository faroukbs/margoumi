import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = "http://localhost:8181/api/authentication";

  public currentUser!: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) { 
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser') ;
    if(storageUserAsStr){
      storageUser = JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<User>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl+ '/sign-in', user).pipe(
      map(response => {
        if(response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response; 
      })
    )
  }

  register(user: User): Observable<any> {
    return this.http.post(this.baseUrl + '/sign-up', user);
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User);
  }

}
