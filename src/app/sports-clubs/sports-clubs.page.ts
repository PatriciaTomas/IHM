import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sports-clubs',
  templateUrl: './sports-clubs.page.html',
  styleUrls: ['./sports-clubs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SportsClubsPage implements OnInit {
  clubes = [
    {
      nome: "Sport Lisboa e Benfica",
      descricao: "Clube desportivo fundado em 1904, com destaque para o futebol e modalidades como basquetebol, voleibol, futsal e hóquei em patins.",
      imagem: "https://stc.vsports.pt/external/bigpic/venues/estadio_luz_19.webp"
    },
    {
      nome: "Sporting Clube de Portugal",
      descricao: "Clube desportivo fundado em 1906, com destaque para o futebol e modalidades como atletismo, ténis de mesa e hóquei em patins.",
      imagem: "https://secure.cache.images.core.optasports.com/soccer/venues/300x225/529.jpg"
    },
    {
      nome: "Clube de Futebol Os Belenenses",
      descricao: "Clube desportivo fundado em 1919, com destaque para o futebol e modalidades como o râguebi, basquetebol, futsal e hóquei em patins.",
      imagem: "https://images.rr.sapo.pt/restelo_topo_norte11276f40defaultlarge_1024.jpg"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
