import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'user-home',
    component: UserHomeComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'user-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
