import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Order } from 'src/app/models/day33Workshop';

@Component({
  selector: 'app-day33-workshop-cart',
  templateUrl: './day33-workshop-cart.component.html',
  styleUrls: ['./day33-workshop-cart.component.css']
})
export class Day33WorkshopCartComponent implements OnInit{

  @Output()
  onNewOrder = new Subject<Order>

  form!: FormGroup
  lineItems!:FormArray

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.createForm()
      
  }

  private createForm(): FormGroup {
    this.lineItems = this.fb.array([])
    return this.fb.group({
      name: this.fb.control<string>(''),
      address: this.fb.control<string>(''),
      email: this.fb.control<string>(''),
      phone: this.fb.control<string>(''),
      express: this.fb.control<string>(''),
      delivery: this.fb.control<boolean>(false),
      lineItems: this.lineItems,
    })
  }

  addLineItem(){
    this.lineItems.push(this.createLineItem())

  }

  private createLineItem(): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>(''),
      quantity: this.fb.control<number>(1),
      unitPrice: this.fb.control<number>(1),
    })
  }

  processForm() {
    const order: Order = this.form.value as Order
    console.info(">>> Order: ", order)
    this.onNewOrder.next(order)
    this.form = this.createForm()
    
  }

	removeLineItem(i:number) {
		this.lineItems.removeAt(i)
	}


}
