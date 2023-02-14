import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserData } from 'src/app/models/day34';
import { HttpBinService } from './http-bin.service';

@Component({
  selector: 'app-day34',
  templateUrl: './day34.component.html',
  styleUrls: ['./day34.component.css']
})
export class Day34Component implements OnInit{

  data!: UserData
  form!: FormGroup

  constructor(private http: HttpClient, private fb: FormBuilder, private httpBinSvc: HttpBinService){}

  ngOnInit(): void {
      this.form = this.fb.group({
        userId: this.fb.control(''),
        name: this.fb.control(''),
        email: this.fb.control('')
      })
  }

  doPostAsform(){
    const formdata: UserData = this.form.value
    this.httpBinSvc.doPostAsForm(formdata)
    .then(result => {
      console.info('result', formdata)
      this.data = result
    })
    .catch(err => {
      console.error(">>> Error: ", err)
    })
  }

  doPost() {
    const formdata: UserData = this.form.value
    this.httpBinSvc.doPost(formdata)
    .then(result => {
      console.info("Result: ", formdata)
      this.data = result
    })
    .catch(err => {
      console.error(">>> Error: ", err)
    })
  }

  processForm() {
    const formData: UserData = this.form.value
    this.httpBinSvc.doGet(formData)
    .then(result => {
      console.info(">>> In then")
      this.data = result
    })
    .catch(error => {
      console.info(">>> In error")
      console.error(">>> Error: ", error)
      this.data = error
    })
    .finally(() => {
      console.info(">>> In finally")
      this.ngOnInit()
    })
  }

}
