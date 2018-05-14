import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeResultComponent } from './age-result.component';

describe('AgeResultComponent', () => {
  let component: AgeResultComponent;
  let fixture: ComponentFixture<AgeResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
