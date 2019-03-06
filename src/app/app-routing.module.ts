import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WikipediaComponent} from './wikipedia/wikipedia/wikipedia.component';
import {CalendarComponent} from './google/calendar/calendar.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, // Redirect only if the full path is empty
  {path: 'home', component: HomeComponent},
  {path: 'wikipedia', component: WikipediaComponent},
  {path: 'google/calendar', component: CalendarComponent},
  // { path: 'users', component: UsersComponent, children: [
  //         { path: ':id/:name', component: UserComponent }
  //     ] },
  // {
  //     path: 'servers',
  //     canActivateChild: [AuthGuard],
  //     component: ServersComponent,
  //     children: [
  //         { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //         { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  //     ] },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
