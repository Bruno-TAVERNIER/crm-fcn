import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-page-edit-project',
  templateUrl: './page-edit-project.component.html',
  styleUrls: ['./page-edit-project.component.scss']
})
export class PageEditProjectComponent implements OnInit {

  public item$!: Observable<Project>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.item$ = this.projectsService.getItemById(id);
    });
  }

  edit(item: Project) : void{
    this.projectsService.update(item).subscribe(rep => {
      //traitement des erreurs de l'api
      this.router.navigate(['projects']);
    })
  }
  ngOnInit(): void { }
}
