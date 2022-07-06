import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  /* un component reçoit un ou plusieurs paramètres de son parent */
  @Input() init!: Order;
  /* un component retourne une information vers son parent au travers d'un évènement */
  @Output() submitted: EventEmitter<Order> = new EventEmitter<Order>();
  public form!: FormGroup;
  public states = Object.values(stateOrder);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      comment: [this.init.comment],
      id: [this.init.id]
    });
  }

  /* soumission du formulaire */
  public onSubmit() : void {
    this.submitted.emit(this.form.value);
  }

}
