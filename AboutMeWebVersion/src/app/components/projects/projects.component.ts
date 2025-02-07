import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { ProjectService } from '../../../services/project.service';

interface Project {
  name: string;
  description: string;
  link: string;
  repo: string;
}

@Component({
  selector: 'app-projects',
  standalone:false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects()
      .pipe(
        tap((data: Project[]) => {
          if(!data){
            let dataDummy : Project[] = [{name:"View",description:"View is automated project",link: "NA",repo:"NA"}];
            data=dataDummy;
           
          }
          this.projects = data;  // Assign fetched data
          this.loading = false;  // Hide loading spinner
          
          //  data = {
          //   name: "View",
          //   description: "Application with 46 BGP attached to it, with applications capability to handle loads of data added from web sites, from files etc.",
          //   link: "NA",
          //   repo: "na"
          // };
          // this.projects.push(ObjProject);
          
        }),
        catchError((err) => {
          let data: Project[]=[];

          let dataDummy : Project[] = [{name:"View",description:"View is automated project",link: "NA",repo:"NA"}];
            data=dataDummy;
          //this.error = "There was an error fetching the projects."; // Handle error
          this.loading = false; // Hide loading spinner
          this.projects = data;
          //return of([]); // Return an empty array to prevent further errors
          return data
        })
      )
      .subscribe();
  }

}
