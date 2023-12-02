import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfElseComponent } from './ng-if-else.component';

describe('NgIfElseComponent', () => {
  let component: NgIfElseComponent;
  let fixture: ComponentFixture<NgIfElseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfElseComponent]
    });
    fixture = TestBed.createComponent(NgIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
