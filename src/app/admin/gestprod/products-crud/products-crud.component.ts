import { Product } from './../../../shared/product';
import { ProductsService } from './../../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UdPostComponent } from './ud-post/ud-post.component';
@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCRUDComponent implements OnInit {

  constructor(private ps:ProductsService,public dialog:MatDialog) { }

  ngOnInit(): void {

  }


  addProd(event){
    this.ps.addProduct(event);
    this.dataSource._updateChangeSubscription();
  }



  deleteEdit(prod){
    let dialogRef = this.dialog.open(UdPostComponent,{data : { prod } });
    dialogRef.afterClosed().subscribe(
      data => {
        (typeof(data) == 'string') ?
          this.ps.deleteProduct(data)
          :
          this.ps.updateProd(data);
          this.dataSource._updateChangeSubscription();

      }
    )
  }

  dataSource = new MatTableDataSource<Product>(this.ps.getProducts());

  dataSrc:Product[] = this.ps.getProducts();

  columnsDef = ['name','img','prix','desc','catId'];

}
