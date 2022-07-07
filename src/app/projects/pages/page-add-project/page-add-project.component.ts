import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-page-add-project',
  templateUrl: './page-add-project.component.html',
  styleUrls: ['./page-add-project.component.scss']
})
export class PageAddProjectComponent implements OnInit {

  public item = new Project();

  constructor(private projectsService: ProjectsService,
              private router: Router) { }

  ngOnInit(): void { }

  public add(item: Project): void {
    this.projectsService.add(item).subscribe((res) => {
      //traiter les cas d'erreur renvoyés par l'API
      this.router.navigate(['projects']);
    });
  }
}
