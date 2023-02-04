import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationBarComponent } from './components/navigationbar/navigation-bar/navigation-bar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
