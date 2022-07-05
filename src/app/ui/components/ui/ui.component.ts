import { Component, OnInit } from '@angular/core';

/**
 * Description de la classe. Composant UI...
 */
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  /**
   *  Un commentaire pour cette propriété. gère l'état ouvert ou non du menu.
   * */
  public open = true;

  /** constructeur qui ne sert à rien */
  constructor() { }
  /** @ignore */
  ngOnInit(): void { }

  /**
   * propriété de la classe exécutée par le (click) => event binding.
   * inverse l'état d'affichage du menu
   */
  public toggle(): void {
    this.open = !this.open;
    console.log(this.open);
  }

}
