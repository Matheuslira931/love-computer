import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisAnnouncementComponent } from './this-announcement.component';

describe('ThisAnnouncementComponent', () => {
  let component: ThisAnnouncementComponent;
  let fixture: ComponentFixture<ThisAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
