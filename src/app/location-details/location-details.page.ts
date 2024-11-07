import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class LocationDetailsPage {
  name: string;
  address: string;
  description:string;
  image: string;
  map:string;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {
    this.name = this.navParams.get('name');
    this.address = '';
    this.description= '';
    this.image= '';
    this.map='';
  }

  
  dismiss() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  
      
    }
  }


