import { Component, OnInit } from '@angular/core';
interface userinfo
{
  email:string
}
@Component({
  selector: 'app-forms-test',
  templateUrl: './forms-test.component.html',
  styleUrls: ['./forms-test.component.css']
})
export class FormsTestComponent implements OnInit {

  constructor() { }

  submitdatauser(data :any)
  {
console.warn(data);
  }

  userdata : userinfo=
{
  email:'aaa@a.com'
}
  ngOnInit(): void {
  }

}
