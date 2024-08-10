import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { oauthConfig } from '../auth.config';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit{

  constructor(private oauthService:OAuthService){}

  ngOnInit(): void {
    // this.oauthService.configure(oauthConfig);
    // this.oauthService.loadDiscoveryDocumentAndLogin();
    console.log('In user-home');
    
    console.log(this.oauthService.getIdentityClaims());
    
  }



}
