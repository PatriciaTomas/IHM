import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})



export class HomePage {
 

  constructor(private navCtrl: NavController,private menuCtrl: MenuController, private router:Router) {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeGesture(true);
    
   }
  
   goToPage(path: string) {
    this.router.navigate([path]);
  }

  
}
