import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateProject } from 'src/app/core/enums/state-project.enum';
import { Project } from 'src/app/core/models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-page-list-projects',
  templateUrl: './page-list-projects.component.html',
  styleUrls: ['./page-list-projects.component.scss']
})
export class PageListProjectsComponent implements OnInit {

  public collection$ !: Observable<Project[]>;
  public headers: string[];
  public states = Object.values(StateProject);

  constructor(private projectsService : ProjectsService,
              private cd: ChangeDetectorRef,
              private router: Router) {
    this.collection$ = projectsService.collection;
    console.log(this.collection$);
    this.headers = [
      'Actions',
      'ID',
      'Name',
      'Date Début',
      'Date fin',
      'Budget',
      'Manager',
      'Client',
      'Commentaire',
      'Etat'
    ];
  }

  ngOnInit(): void {
  }
  public changeState(item: Project, event:any){
    // console.log(item);
    //console.log(event.target.value);
    const state = event.target.value;
    this.projectsService.changeItem(item, state).subscribe((data) => {
      //console.log(data);
      //item.state = data.state; //meme référence de l'objet (effet retard si plusieurs changes si change strategy.onPush)
      //this.cd.detectChanges();
      item.state = data.state; //si possibilité que quelqu'un d'autre ai modifié l'item dans l'API.
      //a référence de l'objet ayant changé, lance change détection
      this.cd.detectChanges();
    });
  }

  goToEdit(id: number): void{
    this.router.navigate(['projects', 'edit', id]);
  }
  /* suppression d'un item */
  deleteItem(id: number): void{
    //suppression item côté back + from avec le tap rxjs
    this.projectsService.deleteItem(id).subscribe();
  }

}
