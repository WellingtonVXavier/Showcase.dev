import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// 1. IMPORTAR O appConfig CORRETAMENTE
import { appConfig } from './app/app.config'; 

// 2. PASSAR O appConfig COMO SEGUNDO ARGUMENTO
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));