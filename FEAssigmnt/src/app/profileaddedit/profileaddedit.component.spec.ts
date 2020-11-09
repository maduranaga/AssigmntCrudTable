import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileaddeditComponent } from './profileaddedit.component';

describe('ProfileaddeditComponent', () => {
  let component: ProfileaddeditComponent;
  let fixture: ComponentFixture<ProfileaddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileaddeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
