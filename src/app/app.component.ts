import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { oauthConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ameya';

  constructor(private oauthService:OAuthService){}

  ngOnInit(): void {
    
  }
}
