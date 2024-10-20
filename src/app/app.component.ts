import { Component, OnInit } from '@angular/core';
import * as cardData from "../../data/db.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  data:any = cardData;

  ngOnInit(): void {
    console.log(this.data.cards[0].image);
  }
}
