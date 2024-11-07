import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { GastronomyPage } from './gastronomy/gastronomy.page';
import { AccommodationPage } from './accommodation/accommodation.page';
import { PoitsOfInterestPage } from './poits-of-interest/poits-of-interest.page';
import { SportsClubsPage } from './sports-clubs/sports-clubs.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'gastronomy',
    component: GastronomyPage
  },
  {
    path: 'accommodation',
    component: AccommodationPage
  },
  {
    path: 'poits-of-interest',
    component: PoitsOfInterestPage
  },
  {
    path: 'sports-clubs',
    component: SportsClubsPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
