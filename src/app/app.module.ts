import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './user/login/login.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { AddProjectComponent } from './projets/add-project/add-project.component';
import { ListProjectComponent } from './projets/list-project/list-project.component';
import { AddCollabComponent } from './collaborateur/add-collab/add-collab.component';
import { ListCollabComponent } from './collaborateur/list-collab/list-collab.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ListequipeComponent } from './equipe/listequipe/listequipe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importez FormsModule
import { MatButtonModule } from '@angular/material/button'; // Si vous utilisez des boutons Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardCollabComponent } from './collaborateur/dashboard-collab/dashboard-collab.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    LoginComponent,
    ListUserComponent,
    ResetPasswordComponent,
    RegisterComponent,
    AddProjectComponent,
    ListProjectComponent,
    AddCollabComponent,
    ListCollabComponent,
    EquipeComponent,
    ListequipeComponent,
    DashboardComponent,
    DashboardCollabComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatDialogModule ,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],
  providers: [
    DatePipe  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
