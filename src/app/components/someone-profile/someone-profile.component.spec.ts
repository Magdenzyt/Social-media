import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeoneProfileComponent } from './someone-profile.component';

describe('SomeoneProfileComponent', () => {
  let component: SomeoneProfileComponent;
  let fixture: ComponentFixture<SomeoneProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeoneProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeoneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
