import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // For HTTP requests
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule and Routes
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { ProjectService } from '../services/project.service';
import { SkillsGraphComponent } from './components/skills-graph/skills-graph.component';

const routes: Routes = [
  { path: '', component: AppComponent },  // Default route
  { path: 'projects', component: ProjectsComponent },  // Projects page route
  { path: 'home', component: HomeComponent },  // Projects page route
  { path: 'contact', component: ContactComponent },  // Projects page route
  { path: 'skills', component: SkillsGraphComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    SkillsGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
