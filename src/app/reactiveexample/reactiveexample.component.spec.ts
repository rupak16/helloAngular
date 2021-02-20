import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveexampleComponent } from './reactiveexample.component';

describe('ReactiveexampleComponent', () => {
  let component: ReactiveexampleComponent;
  let fixture: ComponentFixture<ReactiveexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
