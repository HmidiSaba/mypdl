import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddProjectComponent } from './projets/add-project/add-project.component';
import { ListProjectComponent } from './projets/list-project/list-project.component';
import { ListCollabComponent } from './collaborateur/list-collab/list-collab.component';
import { AddCollabComponent } from './collaborateur/add-collab/add-collab.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ListequipeComponent } from './equipe/listequipe/listequipe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGaurdService as AuthGuard} from './service/auth-gaurd.service';
import { DashboardCollabComponent } from './collaborateur/dashboard-collab/dashboard-collab.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [//{
  //path: '', component: MenuComponent, canActivate: [AuthGuard],children: [

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projet', component: AddProjectComponent},
  {path: 'listprojet', component: ListProjectComponent},
  {path: 'addCollab', component: AddCollabComponent},
  {path: 'listcollab', component: ListCollabComponent},
  {path: 'equipe', component: EquipeComponent},
  {path: 'listequipe', component: ListequipeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboardCollab', component: DashboardCollabComponent},
  {path: 'contact', component: ContactComponent},

 // ]//},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: ListUserComponent},
  {path: 'resetpwd', component: ResetPasswordComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
