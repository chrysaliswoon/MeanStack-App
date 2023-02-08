import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/models/day32';

@Component({
  selector: 'app-day32-order',
  templateUrl: './day32-order.component.html',
  styleUrls: ['./day32-order.component.css']
})
export class Day32OrderComponent implements OnInit{

  name = ''
  order!: Order
  form!: FormGroup
  lineItems!: FormArray

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  private createForm(): FormGroup {
    this.lineItems = this.fb.array([])
    return this.fb.group({
      name: this.fb.control<string>('Fred', [Validators.required, Validators.minLength(10)]),
      email:this.fb.control<string>('fed@gmail.com', [Validators.required, Validators.email]),
      lineItems: this.lineItems
    })
  }

  processForm(){
    this.order = this.form.value as Order
    this.name = this.form.controls['name'].value
    console.info(">>> Form Data: ", this.order)
  }

  clearForm() {
    this.form = this.createForm()
  }

  public addItem() {
    this.lineItems.push(this.createLineItem())
  }

  private createLineItem(): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>('apple', [Validators.required]),
      quantity: this.fb.control<number>(1, [Validators.required, Validators.min(1), Validators.max(100)])
    })
  }

  public deleteItem(i: number) {
    this.lineItems.removeAt(i)
  }

}
