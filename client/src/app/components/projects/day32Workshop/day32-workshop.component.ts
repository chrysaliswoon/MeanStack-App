import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/day32Workshop';

@Component({
  selector: 'app-day32-workshop',
  templateUrl: './day32-workshop.component.html',
  styleUrls: ['./day32-workshop.component.css']
})
export class Day32WorkshopComponent{
todo: Todo|null = null

processNewTodo(todo: Todo) {

}

}
