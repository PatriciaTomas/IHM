import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';

interface Recipe {
    image: string;
    title: string;
    description: string;
  }
  
@Component({
  selector: 'app-home',
  templateUrl: 'gastronomy.page.html',
  styleUrls: ['gastronomy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GastronomyPage implements OnInit {
  
    recipes: Recipe[] = [
        {
          title: 'Pastéis de Belém',
          description: ' Os Pastéis de Belém são uma das iguarias mais famosas de Lisboa. A receita é guardada a sete chaves pelos mestres pasteleiros da Fábrica de Pastéis de Belém, mas diz-se que é uma variação dos pastéis de nata, criados pelos monges do Mosteiro dos Jerónimos no século XV.',
          image: 'assets/images/pastelBelem.jpg'
        },
        {
          title: 'Bacalhau à Brás',
          description: ' O Bacalhau à Brás é um dos pratos mais típicos de Lisboa. É feito com bacalhau desfiado, batata palha, ovos e cebola, tudo frito em azeite. É uma refeição simples, mas muito saborosa.',
          image: 'https://www.pingodoce.pt/wp-content/uploads/2016/03/bacalhau-a-bras.jpg'
        },
        {
          title: 'Arroz de Marisco',
          description: 'O Arroz de Marisco é um prato tradicional português que também é muito popular em Lisboa. É feito com arroz, vários tipos de marisco, como camarão, amêijoa e mexilhão, e um molho rico à base de tomate, cebola e pimentos.',
          image: 'https://ruralea.com/wp-content/uploads/2022/04/aqualusa-receita-arroz-de-marisco-min-e1651318224122.jpg'
        }
      ];

  constructor(private modalController: ModalController) {}

  async openModal(recipe: Recipe) {
    console.log("Button clicked!");
    const modal = await this.modalController.create({
      component: PopupPage,
      componentProps: {
        recipe: recipe
      }
    });
    return await modal.present();
  }

  ngOnInit() {}
}
