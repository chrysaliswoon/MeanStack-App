import { Component } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {

  showDay31 = false;
  showDay32 = false;
  showDay31Workshop = false;
  showDay32Workshop = true;


  switchDay31() {
    this.showDay31 = true;
    this.showDay32 = false;
    this.showDay31Workshop = false;
    this.showDay32Workshop = false;

  }

  switchDay32() {
    this.showDay32 = true;
    this.showDay31 = false;
    this.showDay31Workshop = false;
  }

  switchDay31Workshop() {
    this.showDay31Workshop = true;
    this.showDay31 = false;
  }

  switchDay32Workshop() {
    this.showDay32Workshop = true;
    this.showDay31Workshop = false;
    this.showDay31 = false;
    this.showDay32 = false;
  }

}
