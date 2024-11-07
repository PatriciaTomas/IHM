import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'poits-of-interest',
    loadComponent: () => import('./poits-of-interest/poits-of-interest.page').then( m => m.PoitsOfInterestPage)
  },
  {
    path: 'gastronomy',
    loadComponent: () => import('./gastronomy/gastronomy.page').then( m => m.GastronomyPage)
  },
  {
    path: 'accommodation',
    loadComponent: () => import('./accommodation/accommodation.page').then( m => m.AccommodationPage)
  },
  {
    path: 'sports-clubs',
    loadComponent: () => import('./sports-clubs/sports-clubs.page').then( m => m.SportsClubsPage)
  },
  {
    path: 'popup',
    loadComponent: () => import('./popup/popup.page').then( m => m.PopupPage)
  },
  {
    path: 'location-details',
    loadComponent: () => import('./location-details/location-details.page').then( m => m.LocationDetailsPage)
  },
];
