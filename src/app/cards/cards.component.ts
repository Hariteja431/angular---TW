import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards=[
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiZjoX6hH8GycAK9OLs6IweXVZ2zOnGInIg&s",
      alt:"hello",
      title:"image1",
      price:120000,
      button:"Book Now"
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiZjoX6hH8GycAK9OLs6IweXVZ2zOnGInIg&s",
      alt:"hii",
      title:"image2",
      price:1200,
      button:"Book Now"
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiZjoX6hH8GycAK9OLs6IweXVZ2zOnGInIg&s",
      alt:"hii",
      title:"image2",
      price:1200,
      button:"Book Now"
    }
  ]

}
