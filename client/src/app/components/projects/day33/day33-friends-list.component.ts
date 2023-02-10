import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserDetail } from 'src/app/models/day33';

@Component({
  selector: 'app-day33-friends-list',
  templateUrl: './day33-friends-list.component.html',
  styleUrls: ['./day33-friends-list.component.css']
})
export class Day33FriendsListComponent implements OnChanges{

  @Input()
  friends: UserDetail[] = []

  @Input()
  name = ""

  count = 0

  ngOnChanges(changes: SimpleChanges): void {
    this.count = changes['friends'].currentValue.length
    console.info(">>> ngOnChanges: ", changes)
  }

}
