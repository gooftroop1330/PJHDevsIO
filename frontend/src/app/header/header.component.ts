import { CollapseComponent } from 'angular-bootstrap-md';
import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  status = false;
  clickEvent() {
    this.status = !this.status;
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
    });
  }
}
