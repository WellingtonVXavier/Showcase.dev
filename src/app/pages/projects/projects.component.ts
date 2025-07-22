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
      name: 'Número secreto',
      description:
        'Este é um simples jogo de adivinhação onde o jogador tenta descobrir os números sorteados pelo sistema. O jogo oferece feedback visual e textual para indicar se o jogador acertou ou errou, tornando-o divertido e intuitivo.',
      link: 'https://numero-secreto-blond.vercel.app/',
    },
    {
      name: 'Alura Plus',
      description:
        'Página promocional do Alura+, destacando planos de assinatura, recursos e compatibilidade em diversos dispositivos, com layout responsivo e moderno.',
      link: 'https://alura-plus-theta-virid-74.vercel.app/',
    },
    {
      name: 'Mochila de Viagem',
      description:
        'Aplicação web simples para gerenciar itens de uma mochila de viagem, permitindo adicionar nome e quantidade de cada item em uma lista dinâmica com armazenamento local.',
      link: 'https://mochilaviagem-six.vercel.app/',
    },
    {
      name: 'Jogo da Forca',
      description:
        'Jogo da Forca interativo no navegador, com seleção de palavra secreta, contagem de vidas, letras digitadas e modais de vitória ou derrota.',
      link: 'https://jogodaforca-ten.vercel.app/',
    },
    {
      name: 'To Do List',
      description:
        'Aplicação To-Do List desenvolvida em Angular, para gerenciar tarefas com adição, exclusão e organização em uma interface dinâmica e responsiva.',
      link: 'https://todolist-mu-red.vercel.app/',
    },
    {
      name: 'Pokedex',
      description:
        'Pokédex interativa desenvolvida em Angular, exibindo informações e imagens dos Pokémon com busca dinâmica e interface moderna.',
      link: 'https://pokedex-snowy-alpha.vercel.app/',
    },
    {
      name: 'Personality Test',
      description:
        'Aplicação de teste de personalidade em Angular, com perguntas dinâmicas e resultado personalizado exibido ao final.',
      link: 'https://personality-test-gules.vercel.app/',
    },
    {
      name: 'Robotron',
      description:
        'Jogo Robotron no qual você controla um robô e ajusta seus atributos em tempo real, interagindo com uma interface dinâmica para medir e personalizar suas habilidades.',
      link: 'https://robotron-2000-chi-nine.vercel.app/',
    },
  ];
}
