import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';
import { BootstrapContext } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; 
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'; 

export default function bootstrap(context: BootstrapContext) {
  
  const serverConfig: ApplicationConfig = {
    providers: [
      provideServerRendering()
    ]
  };

  const mergedConfig = mergeApplicationConfig(appConfig, serverConfig);

  return bootstrapApplication(AppComponent, mergedConfig, context);
}