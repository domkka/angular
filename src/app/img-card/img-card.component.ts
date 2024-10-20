import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrl: './img-card.component.css'
})
export class ImgCardComponent {
  @Input() image!: string;
  @Input() text!: string;

  handleChoosing():void {
    console.log("Auswählen");
  }

  handleLike():void {
    console.log("WOW WIE COOL");
  }
}
