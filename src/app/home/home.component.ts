import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 elements=[""];
  constructor() { }
makenull(val:string)
{
  val="";

}
  addVal(val: string)
  {
      this.elements.push(val);
      
  }
  delVal(val: string)
  {
    
      this.elements.pop();
      
      //delete this.elements[0];
  }
  getVal()
  {
      this.elements.toString;
  }
  ngOnInit(): void {
  }

}
