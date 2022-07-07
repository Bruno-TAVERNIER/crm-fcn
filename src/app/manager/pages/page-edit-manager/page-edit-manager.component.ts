import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/core/models/manager';
import { ManagersService } from '../../services/managers.service';

@Component({
  selector: 'app-page-edit-manager',
  templateUrl: './page-edit-manager.component.html',
  styleUrls: ['./page-edit-manager.component.scss']
})
export class PageEditManagerComponent implements OnInit {

  public item$!: Observable<Manager>
  constructor(private router: Router,
              private route: ActivatedRoute,
              private managersService: ManagersService ) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.item$ = this.managersService.getItemById(id);
    });
  }

  edit(item: Manager): void {
    this.managersService.update(item).subscribe(rep => {
      this.router.navigate(['managers']);
    });
  }

  ngOnInit(): void {
  }

}
