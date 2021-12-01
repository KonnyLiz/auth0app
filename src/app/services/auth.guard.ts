import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Pregunta que quiero implementar en consola
// canActivate, para cuando no usamos lazy load
// canActivatedChild, para cuando tengamos rutas hijas en la ruta
// canLoad, para usar lazyload

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(
    // ruta a la cual quieren entrar
    route: ActivatedRouteSnapshot,

    // estado actual de la ruta
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuthenticated$
  }
}
