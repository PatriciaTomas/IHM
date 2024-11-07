import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  @ViewChild('menu') menu!: IonMenu;
  
  currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  navigateTo(route: string) {
    this.currentRoute = route;
    this.router.navigateByUrl(route);
  }
 
  closeMenu() {
    this.menu.close();
  }
  
  
}

