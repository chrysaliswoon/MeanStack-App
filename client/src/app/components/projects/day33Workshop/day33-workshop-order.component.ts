import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/models/day33Workshop';

@Component({
  selector: 'app-day33-workshop-order',
  templateUrl: './day33-workshop-order.component.html',
  styleUrls: ['./day33-workshop-order.component.css']
})
export class Day33WorkshopOrderComponent implements OnChanges{

  @Input()
  order: Order | null = null

  @Input()
  name!: string

  total = 0

  ngOnChanges(changes: SimpleChanges): void {
    console.info("Changes: ", changes['order'])
    const o = changes['order'].currentValue as Order

    this.total = 0;
    for (let li of o?.lineItems)
      this.total += li.quantity * li.unitPrice
  }

}
