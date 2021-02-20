import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
name1='rupak';
myarr=['ru','sa','taa'];
isTrue=true;
count=0;
currstring="";
  ngOnInit(): void {
  }

  
  getval(val: any)
  {
    console.warn(val);
    this.currstring=val.target.value;
  }

  
  myfunc()
  {
    ++this.count;
  }

  
}
