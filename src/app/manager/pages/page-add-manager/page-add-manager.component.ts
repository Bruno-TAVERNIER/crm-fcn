import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/core/models/manager';
import { ManagersService } from '../../services/managers.service';

@Component({
  selector: 'app-page-add-manager',
  templateUrl: './page-add-manager.component.html',
  styleUrls: ['./page-add-manager.component.scss']
})
export class PageAddManagerComponent implements OnInit {

  public item = new Manager();

  constructor(private managersService: ManagersService, private router: Router) { }

  ngOnInit(): void {}

  public add(item: Manager): void {
    this.managersService.add(item).subscribe((res) => {
      this.router.navigate(['managers']);
    });
  }
}
