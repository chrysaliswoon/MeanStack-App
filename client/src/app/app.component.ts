import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    websiteName = 'VTTP MeanStack Website';
    
    // Change the Title when app is initialized
    constructor(private activateRoute: ActivatedRoute, private title: Title) {}

    ngOnInit(): void {
    }

    

}
