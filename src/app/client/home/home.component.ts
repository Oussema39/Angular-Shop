import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  number;

  itemsInCart = 0;

  constructor(private ps : ProductsService) { }

  ngOnInit(): void {
    console.log(this.ps.getProducts());
  }

  incItems(){
    this.itemsInCart ++;
  }

  filter(event){
    this.number = event;
  }

}
