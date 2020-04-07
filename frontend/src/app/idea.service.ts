import { Idea } from './idea.model';
import { Injectable } from '@angular/core';
import { WebService} from "./web.service";

@Injectable({providedIn: 'root'})
export class IdeaService {
  constructor(private webService: WebService) { }

  addIdea(idea: Idea) {
    // Send to Backend //
    this.webService.post('sendmail', idea);
  }
}
