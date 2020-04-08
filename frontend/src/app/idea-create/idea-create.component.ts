import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import { Idea } from '../idea.model';
import { IdeaService } from '../idea.service'

@Component({
  selector: 'app-idea-create',
  templateUrl: './idea-create.component.html',
  styleUrls: ['./idea-create.component.css']
})
export class IdeaCreateComponent{
  constructor(private ideaService: IdeaService) { }

  resolved(captchaResponse: string) {
    console.log("Resolved captcha with response:" + captchaResponse);
  }

  onAddIdea(form: NgForm) {
    if(form.invalid) { return; }
    const idea: Idea = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      phone_number: form.value.phone_number,
      app_name: form.value.app_name,
      description: form.value.description,
    };
    this.ideaService.addIdea(idea);
  }
}
