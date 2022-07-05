import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {
  /* @Input() car le contenu sera injecté depuis l'élément parent */
  @Input() public title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
