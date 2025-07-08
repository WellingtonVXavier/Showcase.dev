import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, TabMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('tabMenu', { read: ElementRef }) tabMenu!: ElementRef;
  items = [
    { label: 'Home', routerLink: '/' },
    { label: 'Sobre mim', routerLink: '/about' },
    { label: 'Projetos', routerLink: '/projects' },
  ];

  dark = false;
  sliderStyle: any = {};

  toggleDark() {
    this.dark = !this.dark;
    const body = document.body;
    if (this.dark) {
      body.classList.add('dark');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateSlider(0);
    });
  }

  onTabChange(event: any) {
    this.updateSlider(event.index);
  }

  updateSlider(index: number) {
    // pega o elemento da aba ativa
    const tabs = this.tabMenu.nativeElement.querySelectorAll(
      '.p-tabmenu-nav > li'
    );
    if (!tabs || tabs.length === 0) return;

    const activeTab = tabs[index];
    const left = activeTab.offsetLeft;
    const width = activeTab.offsetWidth;

    this.sliderStyle = {
      left: `${left}px`,
      width: `${width}px`,
    };
  }
}
