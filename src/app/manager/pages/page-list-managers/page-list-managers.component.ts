import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/core/models/manager';
import { ProverbeService } from 'src/app/core/services/proverbe.service';
import { ManagersService } from '../../services/managers.service';

@Component({
  selector: 'app-page-list-managers',
  templateUrl: './page-list-managers.component.html',
  styleUrls: ['./page-list-managers.component.scss']
})
export class PageListManagersComponent implements OnInit {

  public collection$ !: Observable<Manager[]>;
  public headers: string[];
  public proverbe!: string;

  constructor(private router: Router,
              private managerService: ManagersService,
              private proverbeService: ProverbeService) {
    this.collection$ = managerService.collection;
    this.headers = [
      'Action',
      'Prénom',
      'Nom'
    ];
  }

  ngOnInit(): void {
    this.proverbe = this.proverbeService.afficher();
  }

  public goToEdit(id: number) : void {
    this.router.navigate(['managers', 'edit', id]);
  }
  public deleteItem(id: number): void {
    this.managerService.deleteItem(id).subscribe();
  }
}
