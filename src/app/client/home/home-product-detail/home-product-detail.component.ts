import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {

  imgs = ['adidas1.jpg',
          'adidas2.jpg','adidas3.jpg',
          'adidas4.jpg'
  ];

  img = '../../../../assets/imgs/';

  sizes = [39,40,41,42,43,44,45];

  models = ['model 1','model 2','model 3','model 4',]

  productNumber = 0;

  constructor(private snackBar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  openSnack(){
    this.snackBar.open('1 item added','',{
      duration : 700,
    })
  }




}
