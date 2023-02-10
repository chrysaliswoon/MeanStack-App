import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDetail } from 'src/app/models/day33';
import { Day33UserDetailsComponent } from './day33-user-details.component';

@Component({
  selector: 'app-day33',
  templateUrl: './day33.component.html',
  styleUrls: ['./day33.component.css']
})
export class Day33Component implements OnInit, AfterViewInit{

  users: UserDetail[] = []
  newName!: string

  //@ViewChild('userDetail')
  @ViewChild(Day33UserDetailsComponent)
  userDetail!: Day33UserDetailsComponent

  @ViewChild('h2')
  h2!: ElementRef

  ngOnInit(): void {
    console.info('>>> ngOnInit userDetail: ', this.userDetail)

  }
  ngAfterViewInit(): void {
    console.info('>>> ngAfterViewInit userDetail: ', this.userDetail)
  }

  process(UserDetail: UserDetail) {
    this.newName = UserDetail.name
    this.users = [...this.users, UserDetail]
    console.info(">>> App Component: ", UserDetail)
  }

  

  deleteUser() {
    console.info(">>> Deleting User...")
    const user = this.userDetail.getFormValue()
    console.info(">>> Form Value: ", user)
    this.h2.nativeElement.innerText = user.name

  }

  

}
