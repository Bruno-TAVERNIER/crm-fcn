import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as mmt from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public date1 = mmt().format('DD/MM/YYYY');
  public date2 = dayjs().format('DD/MM/YYYY');
  constructor() { }

  ngOnInit(): void { }

}
function moment() {
  throw new Error('Function not implemented.');
}

