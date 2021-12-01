import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// npm install @auth0/auth0-angular --force
// auth0 solo es compatible por ahora desde A8 a A12, por lo que para
// la 13, hay que ponerle el --force

export class AuthService {

  constructor() { }
}
