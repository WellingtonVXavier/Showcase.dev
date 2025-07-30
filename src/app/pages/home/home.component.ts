import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showModal = false;

  abrirLink(url: string) {
    window.open(url, '_blank');
  }

  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'assets/curriculo_wellington.pdf';
    link.download = 'Curriculo_Wellington.pdf';
    link.click();
  }
}
