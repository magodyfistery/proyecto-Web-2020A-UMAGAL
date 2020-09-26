import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,  // base con header y footer para todos los templates
    children: [
        {
          path: '',
          redirectTo: '/exhibition/fairs',
          pathMatch: 'full',  // la url sin ningun path
        },
        {
          path: 'account',  // significa que no hubo match
          loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
        },
        {
          path: 'exhibition',  // significa que no hubo match
          loadChildren: () => import('./exhibition/exhibition.module').then(m => m.ExhibitionModule)
        },
        {
          path: 'artist',  // significa que no hubo match
          loadChildren: () => import('./artist/artist-routing.module').then(m => m.ArtistRoutingModule)
        },
        {
          path: 'contact',  // significa que no hubo match
          component: ContactComponent
        },
      ]
  },
  {
    path: 'admin',  // significa que no hubo match
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {  // este se deja para el final
    path: '**',  // significa que no hubo match
    component: PageNotFoundComponent,  // se puede redirigir a 404 o al home!
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
