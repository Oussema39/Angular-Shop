import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ud-post',
  templateUrl: './ud-post.component.html',
  styleUrls: ['./ud-post.component.css']
})
export class UdPostComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  form:FormGroup = this.fb.group({
    name : [this.data.prod.name,Validators.required],
    prix : [this.data.prod.prix,Validators.required],
    catId : [this.data.prod.catId,Validators.required],
    img : [this.data.prod.img,Validators.required],
    desc : [this.data.prod.desc,Validators.required],
  });


}
