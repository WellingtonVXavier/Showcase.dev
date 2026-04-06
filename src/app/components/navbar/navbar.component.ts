import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
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
    TabsModule,
    FormsModule,
    CardModule,
    HomeComponent,
    SobreComponent,
    ProjectsComponent,
    MenubarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: any[] = [];
  activeItem: string = 'home';


  constructor(private router: Router) {}
  ngOnInit() {
   this.items = [
    { label: 'Home', id: 'home', icon: 'pi pi-fw pi-home' },
    { label: 'Sobre', id: 'sobre', icon: 'pi pi-fw pi-info-circle' },
    { label: 'Projetos', id: 'projetos', icon: 'pi pi-fw pi-briefcase' }
    ];

    this.router.navigate(['/home']);
  }
}
