import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    children:[
      {
        path:'change-detection',
        title:'Change Detection',
        loadComponent:() => import('./dashboard/pages/change-detection/change-detection.component').then(c => c.ChangeDetectionComponent),
      },
      {
        path:'control-flow',
        title:'Control Flow',
        loadComponent:() => import('./dashboard/pages/control-flow/control-flow.component').then(c => c.ControlFlowComponent),
      },
      {
        path:'defer-options',
        title:'Defer Options',
        loadComponent:() => import('./dashboard/pages/defer-options/defer-options.component').then(c => c.DeferOptionsComponent),
      },
      {
        path:'defer-views',
        title:'Defer views',
        loadComponent:() => import('./dashboard/pages/defer-views/defer-views.component').then(c => c.DeferViewsComponent),
      },
      {
        path:'user/:id',
        title:'User View',
        loadComponent:() => import('./dashboard/pages/user/user.component').then(c => c.UserComponent),
      },
      {
        path:'user-list',
        title:'User List',
        loadComponent:() => import('./dashboard/pages/users/users.component').then(c => c.UsersComponent),
      },
      {
        path:'view-transitio',
        title:'View Transitio',
        loadComponent:() => import('./dashboard/pages/view-transitio/view-transitio.component').then(c => c.ViewTransitioComponent),
      },
      {
        path:'view-transitio2',
        title:'View Transitio2',
        loadComponent:() => import('./dashboard/pages/view-transitio2/view-transitio.component2').then(c => c.ViewTransitioComponent2),
      },
      {
        path:'inputs-outputs',
        title:'Inputs Outputs',
        loadComponent:() => import('./dashboard/pages/input-output/input-output.component').then(c => c.InputOutputComponent),
      },
      {
        path:'',
        redirectTo:'control-flow',
        pathMatch:'full'
      },
    ]
  },
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch:'full'
  }
];
