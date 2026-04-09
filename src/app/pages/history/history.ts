import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-history',
  imports: [TimelineModule],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  events = [
    { 
      status: 'Desenvolvedor Júnior', 
      date: 'Abril/2024 - Presente', 
      icon: 'pi pi-bolt', 
      color: '#bc13fe',
      description: 'Foco em evolução de sistemas internos e desenvolvimento de novas soluções utilizando C#, EF Core 8 e Angular. Atuação direta na otimização de processos do portal corporativo e arquitetura de software.' 
    },
    { 
      status: 'Analista de Sistemas (Sustentação)', 
      date: '2023 - 2024', 
      icon: 'pi pi-ticket', 
      color: '#8a2be2',
      description: 'Gerenciamento de tickets e sustentação de sistemas. Transição para o desenvolvimento ativo, participando da refatoração de procedures SQL para Dapper e melhorias no ecossistema .NET.' 
    },
    { 
      status: 'Analista de Sistemas Trainee', 
      date: '04/11/2021 - 2022', 
      icon: 'pi pi-rocket', 
      color: '#4b0082',
      description: 'O início da jornada profissional. Foco em aprendizado de regras de negócio, lógica de programação e imersão no ambiente de banco de dados SQL Server.' 
    }
  ];
}
