import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnnouncementComponent } from './my-announcement.component';

describe('MyAnnouncementComponent', () => {
  let component: MyAnnouncementComponent;
  let fixture: ComponentFixture<MyAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
