import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  @Output()  filterEvent:EventEmitter<any> = new EventEmitter();

  width = false;

  active = true;
  searchValue = '';

  chips = ['adidas','shoe','2020','gray','man'
  ,'shoe','2020','gray'
  ,'shoe','2020','gray','shoe'];

  constructor() { }

  ngOnInit(): void {
    window.onresize = () =>{
      this.width = (window.innerWidth <= 1121) ? true : false;
    }
  }

  filter(value){
    console.log("filter event fired");
    console.log(this.searchValue);
    // this.filterEvent.emit(value.value);
  }


}
