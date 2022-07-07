import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public item = new Client();
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void { }

  public add(item: Client): void {
    this.clientService.add(item).subscribe((res) => {
      //traiter les erreurs éventuelles retournées par l'API
      this.router.navigate(['clients']);
    });
  }
}
