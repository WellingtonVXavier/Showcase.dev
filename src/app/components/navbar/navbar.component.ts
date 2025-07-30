import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { HomeComponent } from "../../pages/home/home.component";
import { SobreComponent } from '../../pages/sobre/sobre.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TabMenuModule,
    FormsModule,
    CardModule,
    HomeComponent,
    SobreComponent,
    ProjectsComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: any[] = [];
 activeItem: any;


  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
      { label: 'Home', id: 'home', icon: 'pi pi-fw pi-home' },
      { label: 'Sobre', id: 'sobre', icon: 'pi pi-fw pi-info-circle' },
      { label: 'Projetos',  id: 'projetos', icon: 'pi pi-fw pi-briefcase' },
    ];

    this.activeItem = this.items[0];
  }
}
