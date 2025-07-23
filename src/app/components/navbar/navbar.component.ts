import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    TabMenuModule,
    MenubarModule,
    InputSwitchModule,
    FormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('tabMenu', { read: ElementRef }) tabMenu!: ElementRef;
  items = [
    { label: 'Home', routerLink: '/' },
    { label: 'Projetos', routerLink: '/projects' },
  ];
  sliderStyle: any = {};

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
