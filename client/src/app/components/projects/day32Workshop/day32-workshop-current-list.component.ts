import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/day32Workshop';

@Component({
  selector: 'app-day32-workshop-current-list',
  templateUrl: './day32-workshop-current-list.component.html',
  styleUrls: ['./day32-workshop-current-list.component.css']
})
export class Day32WorkshopCurrentListComponent {

  @Input()
  todoList: Todo[] = []

}
