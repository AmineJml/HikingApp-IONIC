import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostPage } from './add-post.page';
import { TabsPage } from 'c:/Main/Programs/XAMPP/htdocs/hikingApp/frontEnd-ionic/src/app/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostPage
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostPageRoutingModule {}
