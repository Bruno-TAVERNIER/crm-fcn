import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  // propriété de la classe
  public open = true;

  constructor() { }

  ngOnInit(): void { }

  // propriété de la classe exécutée par le (click) => event binding
  public toggle(): void {
    this.open = !this.open;
    console.log(this.open);
  }

}
