import { Component } from '@angular/core';
import { Image } from 'src/app/models/day31';

@Component({
  selector: 'app-day31',
  templateUrl: './day31.component.html',
  styleUrls: ['./day31.component.css']
})
export class Day31Component {

  image = "../assets/sheltie.jpeg";
  imageWidth = 20

  dogImages = [
    "/assets/sheltie.jpeg",
    "/assets/merle.jpeg",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1kBsLFakVpnWaNCzPGXOBvrn4MolJUPTHw&usqp=CAU"
  ]

  imageClicked(data: Image) {
    console.info(`Image Clicked: `, data)
  }


}
