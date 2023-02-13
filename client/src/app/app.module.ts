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
import { Error1PageComponent } from './pages/error-page/error1-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project.service';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { Day31Component } from './components/projects/day31/day31.component';
import { Day31ImageComponent } from './components/projects/day31/day31-image.component';
import { Day31WorkshopComponent } from './components/projects/day31Workshop/day31-workshop.component';
import { Day31WorkshopInventoryComponent } from './components/projects/day31Workshop/day31-workshop-inventory.component';
import { Day31WorkshopCartComponent } from './components/projects/day31Workshop/day31-workshop-cart.component';
import { Day32Component } from './components/projects/day32/day32.component';
import { Day32OrderComponent } from './components/projects/day32/day32-order.component';
import { Day32WorkshopComponent } from './components/projects/day32Workshop/day32-workshop.component';
import { Day32WorkshopTodoListComponent } from './components/projects/day32Workshop/day32-workshop-todo-list.component';
import { Day32WorkshopCurrentListComponent } from './components/projects/day32Workshop/day32-workshop-current-list.component';
import { Day33Component } from './components/projects/day33/day33.component';
import { Day33UserDetailsComponent } from './components/projects/day33/day33-user-details.component';
import { Day33FriendsListComponent } from './components/projects/day33/day33-friends-list.component';
import { Day33WorkshopComponent } from './components/projects/day33Workshop/day33-workshop.component';
import { Day33WorkshopCartComponent } from './components/projects/day33Workshop/day33-workshop-cart.component';
import { Day33WorkshopOrderComponent } from './components/projects/day33Workshop/day33-workshop-order.component';

// View - Routes 
const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'projects', component: ProjectPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '404', component: Error1PageComponent},
  // Wildcard - Catch
  {path: '**', redirectTo: '404', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    Error1PageComponent,
    ProjectPageComponent,
    Day31Component,
    Day31ImageComponent,
    Day31WorkshopComponent,
    Day31WorkshopInventoryComponent,
    Day31WorkshopCartComponent,
    Day32Component,
    Day32OrderComponent,
    Day32WorkshopComponent,
    Day32WorkshopTodoListComponent,
    Day32WorkshopCurrentListComponent,
    Day33Component,
    Day33UserDetailsComponent,
    Day33FriendsListComponent,
    Day33WorkshopComponent,
    Day33WorkshopCartComponent,
    Day33WorkshopOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
