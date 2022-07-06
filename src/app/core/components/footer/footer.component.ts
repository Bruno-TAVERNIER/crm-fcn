import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as mmt from 'moment';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public date1 = mmt().format('DD/MM/YYYY');
  public date2 = dayjs().format('DD/MM/YYYY');
  public version$!: BehaviorSubject<number>;
  constructor(private versionService: VersionService) {
    this.version$ = this.versionService.version$;
  }

  ngOnInit(): void { }

}
function moment() {
  throw new Error('Function not implemented.');
}

