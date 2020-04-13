import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPayFormComponent } from './card-pay-form.component';

describe('CardPayFormComponent', () => {
  let component: CardPayFormComponent;
  let fixture: ComponentFixture<CardPayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
