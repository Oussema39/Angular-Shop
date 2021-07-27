import { Product } from './../shared/product';
import { Injectable } from '@angular/core';
import { Products } from '../shared/products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
  }

  p = Products;

  updateProd(prod){
    let index;
    for (let _prod of this.p){
      if (_prod.name == prod.name) {index = this.p.indexOf(_prod);break;}
    }
    this.p[index] = prod;
  }

  deleteProduct(product){
    let index = (typeof product == 'number') ? product : this.p.indexOf(product);
    this.p.splice(index,1);
  }

  addProduct(prod:Product){
    this.p.push(prod);
  }

  getProducts(){
    return this.p;
  }
}
