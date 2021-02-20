import { Component } from '@angular/core';
import {UserdataService} from './userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloAngular';
  name= 'rupak';
valuerecieved='';

  parentfunction(data:any)
  {
console.log(data);
this.valuerecieved=data;
  }
  objectarray=[
    
    {
namev:'rupak',
idv:1

  },
  {
    namev:'rupak1',
    idv:1
    
      },
      {
        namev:'rupak2',
        idv:1
        
          }
]
//data1=[];
data2=[];
data1 : any[] = [];
constructor(private el:UserdataService)
{

   
  
}
showvalue()
{
  this.el.getdatauser().subscribe((data: any[])=>
      {
        console.warn(data);
        this.data1=data;
        
      })
}

}
