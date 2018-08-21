import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthGuard } from './shared/guard/user-auth.guard';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/layout.module#LayoutModule',
    canActivate: [UserAuthGuard]
  },
  {
    path: 'not-found',
    loadChildren: './shared/modules/page-not-found/page-not-found.module#PageNotFoundModule'
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
