import { Product } from './../../../shared/product';
import { ProductsService } from './../../../service/products.service';
import { HomeProductDetailComponent } from './../home-product-detail/home-product-detail.component';
import { Component, OnInit , Output,EventEmitter, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import AOS  from 'aos';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  @Input() _number ;

  @Output() itemAdded : EventEmitter<any> = new EventEmitter();

  items:Product[] ;

  showSpinner = false;

  constructor(private dialog : MatDialog,private ps : ProductsService) { }

  filterItems(){
    console.log("items filtered");
    // this.items.filter(item => (item % +this._number) == 0);
  }

  ngOnInit(): void {
    AOS.init();
    this.items = this.ps.getProducts();


    window.onscroll = ()=>{
      if (((window.scrollY + window.innerHeight) - document.body.scrollHeight -4) === -4){
        this.showSpinner = true;
        setTimeout(
          () => {
            this.items.push(...this.items.slice(0,9));
            this.showSpinner = false;
          }
          ,2500)
      }
    }

    for(let i=0;i<4;i++){
      this.items.push(this.items[0]);
    }

    let Cardsneeded =  this.items.length % 3;
    if (Cardsneeded)
      this.items.push(...this.items.slice(0,6 - Cardsneeded));

  }

  openDialog(_data){
    let dialogRef = this.dialog.open(HomeProductDetailComponent,{data : {_data}});
    dialogRef.afterClosed().subscribe(
      res => {
        if (res)
          this.itemAdded.emit('fired')
      }
    )
  }


}
