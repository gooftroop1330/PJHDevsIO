import { Injectable } from '@angular/core';
import { WebService } from './web.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService: WebService) { }

  createIdea(title: string) {
    return this.webService.post('', { title });
  }
}
