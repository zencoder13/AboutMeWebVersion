import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Project {
  name: string;
  description: string;
  link: string;
  repo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'https://localhost:7076/api/ProjectsEmpty';  // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
