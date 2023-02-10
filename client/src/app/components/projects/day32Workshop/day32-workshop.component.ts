import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/models/day32Workshop';

@Component({
  selector: 'app-day32-workshop',
  templateUrl: './day32-workshop.component.html',
  styleUrls: ['./day32-workshop.component.css']
})
export class Day32WorkshopComponent implements OnInit{

todo: Todo|null = null

key = 'items'
content: Todo[] = [];

ngOnInit(): void {
  const jsonString = localStorage.getItem('todo')
  if(!!jsonString)
  this.todo = JSON.parse(jsonString)

  console.info('>>> ngOnInit: ', this.todo)
}

processNewTodo(todo: Todo) {

  const jsonString = JSON.stringify(todo)
  console.info('>>> Saving todo items to localstorage')
  const todoItems = localStorage.setItem(this.key, jsonString)

  const data = localStorage.getItem(this.key);
  console.info(">>> Data: ", data)

  this.content.push(todo);

  console.info(">>> Content: ", this.content);

  return data;
}

// getData(todo: Todo) {
//   const data = localStorage.getItem(this.key) || "";

//   console.info(">>> Data: ", data)

//   return data;
// }

}
