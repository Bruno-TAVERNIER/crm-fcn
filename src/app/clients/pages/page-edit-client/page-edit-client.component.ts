import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public item$!: Observable<Client>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService) {
                this.route.paramMap.subscribe((params) => {
                  const id = Number(params.get('id'));
                  this.item$ = this.clientService.getItemById(id);
                });
              }

  ngOnInit(): void { }

  public edit(item: Client): void {
    console.log(item.id);
    this.clientService.update(item).subscribe((res) => {
      //traiter les erreurs de l'apip si besoin
      this.router.navigate(['clients']);
    });
  }
}
