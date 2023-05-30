import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdComponent } from './card-ad.component';

describe('CardAdComponent', () => {
  let component: CardAdComponent;
  let fixture: ComponentFixture<CardAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
