import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Projeto 1',
      description: 'Descrição 1',
      link: 'https://numero-secreto-blond.vercel.app/',
    },
    {
      name: 'Projeto 2',
      description: 'Descrição 2',
      link: 'https://alura-plus-theta-virid-74.vercel.app/',
    },
  ];
}
