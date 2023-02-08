import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORIES } from 'src/app/data/day31WorkshopData';
import { CustomerSelection, Inventory } from 'src/app/models/day31Workshop';

@Component({
  selector: 'app-day31-workshop-inventory',
  templateUrl: './day31-workshop-inventory.component.html',
  styleUrls: ['./day31-workshop-inventory.component.css']
})
export class Day31WorkshopInventoryComponent {

  quantity = 0

  // Inventory [] = Models
  // INVENTORIES = Data
  inventories: Inventory[] = INVENTORIES

  @Output()
  onSelection = new Subject<CustomerSelection>()

  selected(name:string, imageUrl: string) {
    const selection = {
      name,
      imageUrl,
      quantity: this.quantity
    } as CustomerSelection
    this.onSelection.next(selection)
    this.inventories.splice(0,1)
  }

  addToCart(quantity: number) {
    this.quantity += quantity
    // console.log(`Quantity: `, quantity)
  }

}
