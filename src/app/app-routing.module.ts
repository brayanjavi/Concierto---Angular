import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de tener un componente Home
import { ConciertoComponent } from './concierto/concierto.component';

/**
 * Defines the routes for the application.
 * 
 * Routes:
 * - `login`: Loads the `LoginComponent`.
 * - `home`: Loads the `HomeComponent`.
 * - `''` (empty path): Redirects to the `/login` path.
 * 
 * The `pathMatch: 'full'` property ensures that the redirect only occurs when the full URL matches the empty path.
 */
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'concierto', component: ConciertoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }