import {Component} from '@angular/core';

@Component({
  selector: 'app-idea-create',
  templateUrl: './idea-create.component.html',
  styleUrls: ['./idea-create.component.css']
})
export class IdeaCreateComponent {
  enteredValue = '';
  newIdea = 'Idea goes here';
  onAddIdea() {
    this.newIdea = this.enteredValue;
  }
}
