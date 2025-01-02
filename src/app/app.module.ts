import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';  // Import HeaderComponent
import { AboutComponent } from './about/about.component';  // Import other components
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { routes } from './app.routes';  // Import routes from your 'toutes.ts' (or 'routes.ts')
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    AppRoutingModule  // Use RouterModule with routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
