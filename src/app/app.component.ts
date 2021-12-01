import { Component } from '@angular/core';

// la libreria ya trae el servicio para inyectar
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private auth: AuthService
  ){

  }
}
