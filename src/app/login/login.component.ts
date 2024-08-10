import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { oauthConfig } from '../auth.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private oauthService:OAuthService){
    this.configureAuthService();
  }

  ngOnInit(): void {
    // this.configureAuthService()
  }

  configureAuthService(){
    this.oauthService.configure(oauthConfig);
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  onLogin(){
    this.oauthService.initCodeFlow();
  }

}
