import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { NewsboardComponent } from './container/newsboard/newsboard.component';
import { RegisterComponent } from './container/register/register.component';
import { AuthGuard } from './guards/auth.service';

const routes: Routes = [
  {path:'login', component:LoginComponent, canActivate: [AuthGuard]},
  {path:'register', component:RegisterComponent, canActivate: [AuthGuard]},
  {path:'newsboard/:genre', component:NewsboardComponent, canActivate: [AuthGuard]},
  {path:'', redirectTo:'/register', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
