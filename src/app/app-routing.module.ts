import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // une route: un path + un component
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},

  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'managers',
    loadChildren: () => import('./manager/manager.module').then((m) => m.ManagerModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  /* double * pour l'erreur 404 */
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  // stratégie de préchargement des modules le plus rapidement possible
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router){
    const replacer = (key: any, value: any) => typeof value === 'function' ? value.name : value;
    console.log('Routes: ' + JSON.stringify(router.config, replacer, 2));
  }

}
