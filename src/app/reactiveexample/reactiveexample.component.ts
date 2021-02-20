import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveexample',
  templateUrl: './reactiveexample.component.html',
  styleUrls: ['./reactiveexample.component.css']
})
export class ReactiveexampleComponent implements OnInit {


  profileForm = new FormGroup({
    firstName: new FormControl('rupak'),
    lastName: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
