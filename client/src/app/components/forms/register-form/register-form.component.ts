import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{

  registerForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),

    })
  }

  registerUser() {
    console.log("Submitted")
  }

}
