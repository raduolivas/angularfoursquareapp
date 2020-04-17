import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/security/auth.guard';

/**
 * I decide to disable AuthGuard because its not needed
 * as i`m not using the Auth0 authentication
 */

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    // canActivate: [AuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
