import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerSelection } from 'src/app/models/day31Workshop';

@Component({
  selector: 'app-day31-workshop-cart',
  templateUrl: './day31-workshop-cart.component.html',
  styleUrls: ['./day31-workshop-cart.component.css']
})
export class Day31WorkshopCartComponent {

  @Input()
  cart: CustomerSelection[] = []

  @Output()
  onDelete = new Subject<number>()

  @Output()
  onReduceQty = new Subject<number>()

  @Output()
  onAddQty = new Subject<number>()

  deleteItem(i: number) {
    console.info(`To delete: ${i}`)
    this.onDelete.next(i);
  }

  addQty(i: number) {
    console.info(`Add quantity by: ${i}`)
    this.onAddQty.next(i)
  }

  reduceQty(i: number) {
    console.info(`Reduce quantity by: ${i}`)
    this.onReduceQty.next(i)
  }

}
