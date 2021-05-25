import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import {AcceuilComponent} from './acceuil/acceuil.component'
import {ProfileComponent} from './profile/profile.component' ; 
import {UpdateProfileComponent} from './profile/update-profile/update-profile.component';

const routes: Routes = [
 
  
  {path: '', component:SidebarComponent,children : [
  {path: 'users' , component: UserComponent},
  {path: 'ajoutuser', component: AddUserComponent},
  {path : 'profile' , component : ProfileComponent},
  {path : 'updateprofile', component :UpdateProfileComponent}
  

]},
  {path : 'home' , component : AcceuilComponent} , 
  {path : 'login', component : LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
