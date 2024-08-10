import { AuthConfig } from "angular-oauth2-oidc";

export const oauthConfig:AuthConfig = {
    issuer:'http://localhost:8080/realms/personal-account-manager',
    redirectUri:'http://localhost:4200/user-home',
    // redirectUri:window.location.origin,
    clientId:'personal-account-manager-pkce-client',
    // strictDiscoveryDocumentValidation:false,
    scope:'openid profile',
    responseType:'code',
    showDebugInformation:true,
    tokenEndpoint:'http://localhost:8080/realms/personal-account-manager/protocol/openid-connect/token'
}

