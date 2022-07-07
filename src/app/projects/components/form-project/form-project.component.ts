import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/clients/services/client.service';
import { StateProject } from 'src/app/core/enums/state-project.enum';
import { Client } from 'src/app/core/models/client';
import { Manager } from 'src/app/core/models/manager';
import { Project } from 'src/app/core/models/project';
import { ManagersService } from 'src/app/manager/services/managers.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss']
})
export class FormProjectComponent implements OnInit {

  @Input() init!: Project;
  @Output() submitted: EventEmitter<Project> = new EventEmitter<Project>();
  public form!: FormGroup;
  public states = Object.values(StateProject);
  public managers!: Manager[];
  public clients!: Client[];

  constructor(private fb: FormBuilder,
              private managerService: ManagersService,
              private clientService: ClientService) {
    managerService.collection.subscribe(data =>  {
      this.managers = data;
    });
    clientService.collection.subscribe(data =>  {
      this.clients = data;
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.init.name, Validators.required],
      dteDeb: [this.init.dteDeb, Validators.required],
      dteFin: [this.init.dteFin, Validators.required],
      budget: [this.init.budget, Validators.required],
      manager: [this.init.manager, Validators.required],
      client: [this.init.client, Validators.required],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id]
    })
  }

    //soumission du formulaire
    public onSubmit(): void {
      //console.log(this.form.value);
      this.submitted.emit(this.form.value);
    }

}
