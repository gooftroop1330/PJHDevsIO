import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Idea } from '../idea.model';
import { IdeaService } from '../idea.service'
import {ModalDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-idea-create',
  templateUrl: './idea-create.component.html',
  styleUrls: ['./idea-create.component.css']
})
export class IdeaCreateComponent{
  constructor(private ideaService: IdeaService) { }
  @ViewChild('frame', { static: true }) frame: ModalDirective;

  resolved(captchaResponse: string) {}

  showModal() {
    this.frame.show();
  }
  onAddIdea(form: NgForm) {
    if(form.invalid) { return; }
    const idea: Idea = {
      first_name: form.value.first_name.trim(),
      last_name: form.value.last_name.trim(),
      email: form.value.email.trim(),
      phone_number: form.value.phone_number,
      app_name: form.value.app_name.trim(),
      description: form.value.description.trim(),
    };
    this.ideaService.addIdea(idea);
    this.showModal();
    form.resetForm();
  }
}
