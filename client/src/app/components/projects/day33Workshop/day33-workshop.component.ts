import { Component } from '@angular/core';
import { Order } from 'src/app/models/day33Workshop';

@Component({
  selector: 'app-day33-workshop',
  templateUrl: './day33-workshop.component.html',
  styleUrls: ['./day33-workshop.component.css']
})
export class Day33WorkshopComponent {

  order!: Order

  customerName!: string

  processNewOrder(o: Order) {
    this.order = o
    this.customerName = o.name
    console.info(">>> in AppComponent: ", this.order)
  }

}
