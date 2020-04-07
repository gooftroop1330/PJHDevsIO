import { Idea } from './idea.model';
import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class IdeaService {
  addIdea(idea: Idea) {
    console.log(idea.first_name);
    // Send to Backend //
  }
}
