import { Component } from '@angular/core';
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
  }

}
