import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { History } from './pages/history/history';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: SobreComponent }, 
  { path: 'projects', component: ProjectsComponent },
  { path: 'history', component: History },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];