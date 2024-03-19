import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInterpolationComponent } from './angular-interpolation.component';

describe('AngularInterpolationComponent', () => {
  let component: AngularInterpolationComponent;
  let fixture: ComponentFixture<AngularInterpolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularInterpolationComponent]
    });
    fixture = TestBed.createComponent(AngularInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
