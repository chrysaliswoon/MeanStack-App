import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  // Change the Title when app is initialized
  constructor(private activateRoute: ActivatedRoute, private title: Title) {}

  ngOnInit(): void {
      // const name = this.activateRoute.snapshot.params['']
      this.title.setTitle('Login')
  }
  

}
