import { Component } from '@angular/core';
import { INVENTORIES } from 'src/app/data/day31WorkshopData';
import { CustomerSelection } from 'src/app/models/day31Workshop';

@Component({
  selector: 'app-day31-workshop',
  templateUrl: './day31-workshop.component.html',
  styleUrls: ['./day31-workshop.component.css']
})
export class Day31WorkshopComponent {

  content: CustomerSelection[] = []

  selected(selection: CustomerSelection) {
    console.info('>>> app.component selected: ', selection)
    // Filter returns an array
    // const inv = INVENTORIES.filter(v => v.imageUrl == selection.name)
    // this.content.push(inv[0])

    for (let i = 0; i < this.content.length; i++) {
      if(this.content[i].id == selection.id) {
        this.content[i].quantity = this.content[i].quantity + 1;
        return;
      }
    }
    this.content.push(selection)
  }

  deleteItem(i: number) {
    // Start at Index 1 and delete 1 item
    this.content.splice(i, 1)
  }

  addQty(i: number) {
    this.content[i].quantity = this.content[i].quantity + 1;
  }

  reduceQty(i: number) {
    this.content[i].quantity = this.content[i].quantity - 1;
  }

}
