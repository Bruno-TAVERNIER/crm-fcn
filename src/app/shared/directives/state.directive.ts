import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {

  @Input() appState!: string;
  // binder la propriété class du host élément "td" dans le component parent
  // en fonction du state
  @HostBinding('class') tdClassName!: string;

  constructor() { }

  ngOnChanges() {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
    // si appState vaut CANCELED => state-canceled
    // si appState vaut OPTION => state-option
    // si appstate vaut CONFIRMED => state-confirmed
  }
}
