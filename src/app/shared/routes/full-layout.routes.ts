import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'heros-list',
    loadChildren: './heros-list/heros-list.module#HerosListModule'
  }
];