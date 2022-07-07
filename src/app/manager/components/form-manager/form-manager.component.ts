import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Manager } from 'src/app/core/models/manager';

@Component({
  selector: 'app-form-manager',
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss']
})
export class FormManagerComponent implements OnInit {
  @Input() init!: Manager;
  @Output() submitted: EventEmitter<Manager> = new EventEmitter<Manager>();
  public form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      prenom: [this.init.prenom, Validators.required],
      nom: [this.init.nom, Validators.required],
      id: [this.init.id]
    });
  }

  //soumission du formulaire
  public onSubmit(): void {
    //console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
