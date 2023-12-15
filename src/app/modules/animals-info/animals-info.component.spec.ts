import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsInfoComponent } from './animals-info.component';

describe('AnimalsInfoComponent', () => {
  let component: AnimalsInfoComponent;
  let fixture: ComponentFixture<AnimalsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
