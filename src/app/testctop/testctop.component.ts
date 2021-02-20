import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testctop',
  templateUrl: './testctop.component.html',
  styleUrls: ['./testctop.component.css']
})
export class TestctopComponent implements OnInit {
@Output() parentfunction:EventEmitter<any> =new EventEmitter
  constructor() { }

  ngOnInit(): void {
    this.parentfunction.emit('hello rupak');
  }

}
