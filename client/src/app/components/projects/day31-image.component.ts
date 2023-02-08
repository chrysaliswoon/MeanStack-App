import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Image } from 'src/app/models/day31';

@Component({
  selector: 'app-day31-image',
  templateUrl: './day31-image.component.html',
  styleUrls: ['./day31-image.component.css']
})
export class Day31ImageComponent {

  @Input()
  imageURL = "/assets/sheltie.jpeg"

  @Input()
  width = 100

  @Output()
  onClicked = new Subject<Image>()

  imageClicked(){
   // console.info("image clicked", this.imageURL);

   // fire the event
    const img: Image = {
      imageName: this.imageURL,
      size: this.width
    }
    this.onClicked.next(img)
    console.info(this.onClicked.next(img))
  }

  resize(factor: number) {
    this.width = this.width + factor
  }

  increment() {
    this.width++
  }

  decrement() {
    this.width--
  }


}
