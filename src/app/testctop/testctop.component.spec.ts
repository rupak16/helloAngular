import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestctopComponent } from './testctop.component';

describe('TestctopComponent', () => {
  let component: TestctopComponent;
  let fixture: ComponentFixture<TestctopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestctopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestctopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
