import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastronomyPage } from './gastronomy.page';

describe('GastronomyPage', () => {
  let component: GastronomyPage;
  let fixture: ComponentFixture<GastronomyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GastronomyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
