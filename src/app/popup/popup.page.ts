import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PopupPage implements OnInit {
  @Input() recipe: any;
  
  constructor(private modalController: ModalController) { }
 
  dismiss() {
    this.modalController.dismiss();
  }

  ngOnInit() {}

  
 
}
