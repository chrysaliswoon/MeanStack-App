import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task, Todo } from 'src/app/models/day32Workshop';

@Component({
  selector: 'app-day32-workshop-todo-list',
  templateUrl: './day32-workshop-todo-list.component.html',
  styleUrls: ['./day32-workshop-todo-list.component.css']
})
export class Day32WorkshopTodoListComponent implements OnInit{

  priority = [
    {value:'low', viewValue:'Low'},
    {value:'medium', viewValue:'Medium'},
    {value:'high', viewValue:'High'},

  ]

  @Output()
  onNewToDo = new Subject<Todo>()
  
  @Input()
  todo: Todo|null = null
  
  form!: FormGroup
  taskArray!: FormArray

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.createTodo(this.todo)
  }

  private createTodo(todo: Todo | null = null): FormGroup{
    this.taskArray = this.createTasks(todo?.tasks? todo.tasks: []);
    return this.fb.group({
      name: this.fb.control('Alex', [Validators.required]),
      email: this.fb.control('alex@gmail.com'),
      tasks: this.taskArray,
    })
  }

  private createTasks(tasks: Task[] = []): FormArray {
    return this.fb.array(
      tasks.map(t => this.createTask(t))
    )
  }

  processForm() {
    const todo = this.form.value as Todo
    console.info(">>> TO-DO Data: ", todo)
    this.onNewToDo.next(todo);
  }

  addTask() {
    this.taskArray.push(this.createTask())
  }

  private createTask(task: Task | null = null): FormGroup {
    return this.fb.group({
      task: this.fb.control(task?.task? task.task: '', [Validators.required]),
      priority: this.fb.control(task?.priority? task.priority: ''),
      dueDate: this.fb.control(task?.dueDate? task.dueDate: ''),
    })
  }

  deleteTask(i: number) {
    this.taskArray.removeAt(i);
  }

}

