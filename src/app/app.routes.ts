import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // rota raiz
  { path: 'sobre', component: SobreComponent },// sobre
  { path: 'projects', component: ProjectsComponent }, // projetos
  { path: '**', redirectTo: '', pathMatch: 'full' }, // redireciona para home em rota inválida
];
