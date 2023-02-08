import { Component } from '@angular/core';
import { Order } from 'src/app/models/day32';

@Component({
  selector: 'app-day32-order',
  templateUrl: './day32-order.component.html',
  styleUrls: ['./day32-order.component.css']
})
export class Day32OrderComponent {

  name = 'Alex'
  order!: Order

}
