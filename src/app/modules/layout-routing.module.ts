import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './landing-page/landing-page.module#LandingPageModule'
      },
      {
        path: 'module1',
        loadChildren: './module1/module1.module#Module1Module'
      },
      {
        path: 'module2',
        loadChildren: './module2/module2.module#Module2Module'
      },
      {
        path: 'module3',
        loadChildren: './module3/module3.module#Module3Module'
      },
      {
        path: 'module4',
        loadChildren: './module4/module4.module#Module4Module'
      },
      {
        path: 'module5',
        loadChildren: './module5/module5.module#Module5Module'
      },
      {
        path: 'module6',
        loadChildren: './module6/module6.module#Module6Module'
      },
      {
        path: 'module7',
        loadChildren: './module7/module7.module#Module7Module'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  exports: [RouterModule]
})

export class LayoutRoutingModule { }



