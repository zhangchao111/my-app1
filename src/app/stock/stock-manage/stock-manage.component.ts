import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
    private stocks:Array<Stock>;
  constructor() { }

  ngOnInit() {
      this.stocks=[
          new Stock(1,"这是第一支股票",1.99,3.5,"这是第一支股票这是第一支股票",["IT","互联网"]),
          new Stock(2,"这是第二支股票",2.99,2.5,"这是第一支股票这是第一支股票",["IT","互联网"]),
          new Stock(3,"这是第三支股票",5.99,4.5,"这是第一支股票这是第一支股票",["IT","互联网"]),
          new Stock(4,"这是第四支股票",6,3,"这是第一支股票这是第一支股票",["IT","互联网"]),
          new Stock(5,"这是第五支股票",9,1.5,"这是第一支股票这是第一支股票",["IT","互联网"]),
          new Stock(6,"这是第六支股票",2,2.5,"这是第一支股票这是第一支股票",["IT","互联网"]),
          new Stock(7,"这是第七支股票",3,5,"这是第一支股票这是第一支股票",["IT","互联网"]),
          new Stock(8,"这是第八支股票",2.1,4.5,"这是第一支股票这是第一支股票",["IT","互联网"]),
      ];

  }

}
export class Stock{
  constructor(
      public id:number,
      public name:string,
      public price:number,
      public rating:number,
      public desc:string,
      public categoryies:Array<string>,
  ){

  }
}