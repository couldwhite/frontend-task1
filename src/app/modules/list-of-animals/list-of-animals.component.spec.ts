import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAnimalsComponent } from './list-of-animals.component';

describe('ListOfAnimalsComponent', () => {
  let component: ListOfAnimalsComponent;
  let fixture: ComponentFixture<ListOfAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
