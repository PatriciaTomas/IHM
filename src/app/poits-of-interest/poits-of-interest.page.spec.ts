import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoitsOfInterestPage } from './poits-of-interest.page';

describe('PoitsOfInterestPage', () => {
  let component: PoitsOfInterestPage;
  let fixture: ComponentFixture<PoitsOfInterestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoitsOfInterestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
