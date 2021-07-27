import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { ProductsCRUDComponent } from './products-crud/products-crud.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UdPostComponent } from './products-crud/ud-post/ud-post.component';
@NgModule({
  declarations: [GestprodComponent, NavTopComponent, ProductsCRUDComponent, AddProductComponent, UdPostComponent],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule

  ],
  exports: [GestprodComponent]
})
export class GestprodModule { }
