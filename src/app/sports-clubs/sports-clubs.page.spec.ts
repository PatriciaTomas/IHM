import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsClubsPage } from './sports-clubs.page';

describe('SportsClubsPage', () => {
  let component: SportsClubsPage;
  let fixture: ComponentFixture<SportsClubsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SportsClubsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
