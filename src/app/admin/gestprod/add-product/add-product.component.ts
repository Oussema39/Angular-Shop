import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() e:EventEmitter<any> = new EventEmitter();

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
  }

  form:FormGroup = this.fb.group({
    name : [,Validators.required],
    prix : [,Validators.required],
    catId : [,Validators.required],
    img : [,Validators.required],
    desc : [,Validators.required],
  });

  submit(){
    if (this.form.valid){
      let prod:Product = {
        catId : this.form.value.catId,
        name : this.form.value.name,
        prix : this.form.value.prix,
        img : this.form.value.img,
        desc : this.form.value.desc,
      }
      this.e.emit(prod);
    }
  }
}
