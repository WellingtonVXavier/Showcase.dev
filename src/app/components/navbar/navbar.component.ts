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
import { History } from '../../pages/history/history';

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
    History,
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
    this.router.navigate(['/home']);
  }
}
