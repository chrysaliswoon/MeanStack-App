import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { UserDetail } from 'src/app/models/day33';

@Component({
  selector: 'app-day33-user-details',
  templateUrl: './day33-user-details.component.html',
  styleUrls: ['./day33-user-details.component.css']
})
export class Day33UserDetailsComponent implements OnInit{

  @Output()
  onUserDetail = new Subject<UserDetail>()

  userDetailsForm!: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.userDetailsForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      comments: this.fb.control('')
    })

  }

  submitForm() {

    const userDetails: UserDetail = this.userDetailsForm.value as UserDetail
    console.info(">>> User Details: ", userDetails)
    this.onUserDetail.next(userDetails);
    this.userDetailsForm = this.createForm()

  }

  getFormValue(): UserDetail {
    return this.userDetailsForm.value as UserDetail
  }

}
