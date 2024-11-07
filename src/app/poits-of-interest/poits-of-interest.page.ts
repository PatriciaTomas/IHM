import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LocationDetailsPage } from '../location-details/location-details.page';

@Component({
  selector: 'app-poits-of-interest',
  templateUrl: './poits-of-interest.page.html',
  styleUrls: ['./poits-of-interest.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PoitsOfInterestPage implements OnInit {
  locations = [
    {
      name: 'Mosteiro dos Jerónimos',
      address: 'Praça do Império 1400-206 Lisboa',
      description:'O Mosteiro dos Jerónimos é um dos mais importantes exemplos da arquitectura manuelina em Portugal e é Património Mundial da UNESCO desde 1983.',
      image:'https://cdn.pixabay.com/photo/2017/05/22/19/48/the-jeronimos-monastery-2335074_960_720.jpg',
      map:'../assets/images/mapa-mosteiroJeronimos.jpg'
    },
    {
      name: 'Torre de Belém',
      address: 'Av. Brasília, 1400-038 Lisboa',
      description:'A Torre de Belém é um ícone da cidade de Lisboa e um testemunho da época dos Descobrimentos Portugueses. É um Património Mundial da UNESCO desde 1983.',
      image:'https://cdn.pixabay.com/photo/2020/02/24/12/56/lisbon-4876136_960_720.jpg',
      map:'../assets/images/mapa-torreBelem.jpg'
    },
    {
      name: 'Castelo de São Jorge',
      address: 'R. de Santa Cruz do Castelo, 1100-129 Lisboa',
      description:'O Castelo de São Jorge é uma das principais atracções turísticas de Lisboa, oferecendo vistas deslumbrantes sobre a cidade e o rio Tejo.',
      image:'https://turismo.eurodicas.com.br/wp-content/uploads/2018/08/castelo-sao-jorge.jpg',
      map:'../assets/images/mapa-casteloSjorge.jpg'
    },
    {
      name: 'Padrão dos Descobrimentos',
      address: 'Av. Brasília, 1400-038 Lisboa',
      description:'O Padrão dos Descobrimentos é um monumento que celebra a era dos Descobrimentos Portugueses. Fica situado em Belém, perto do rio Tejo.',
      image:'https://cdn.pixabay.com/photo/2016/01/13/18/01/lisbon-1138654_960_720.jpg',
      map:'../assets/images/mapa-padraoDescobrimentos.jpg'
    }
  ];

  constructor(private modalController: ModalController) {}

  async openLocationDetails(location: {name: string, address: string, image:string, map:string,description:string,}) {
    const modal = await this.modalController.create({
      component: LocationDetailsPage,
      componentProps: {
        name: location.name,
        address: location.address,
        description:location.description,
        image: location.image,
        map: location.map,
      }
    });
    return await modal.present();
  }

  ngOnInit() {}
      
  }
