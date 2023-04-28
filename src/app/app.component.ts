import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  productName: string = 'Samsung ultra s23';
  ProductId: string = '123ert45555';
  productStaus: string = 'No Product Is added Yet...';
  noOfProduct: number = 0;
  searchProductName!: string;

  studentsArray = [
    {
      fname: 'shradha',
      lname: 'pawar',
    },
    {
      fname: 'shital',
      lname: 'pawar',
    },
  ];
  //all properties/feilds are written above constructor and all method below constructor
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getProductId() {
    return this.ProductId;
  }
  onKeyup(eve: Event) {
    // console.log(eve.target);
    //it will get you input control
    let val = (eve.target as HTMLInputElement).value;
    console.log(val);
    this.searchProductName = val;
  }
  getProductStatus() {
    // console.log('hi');
    // return `${}`
    this.noOfProduct++;
    this.productStaus = `${this.noOfProduct} products are added to the list`;
  }
  removeProduct() {
    if (this.noOfProduct > 0) {
      this.noOfProduct--;
      this.productStaus = `${this.noOfProduct} products are added to the list`;
    }
  }
  //ngstyle directive
  getBgColor() {
    return 'orange';
  }
}
