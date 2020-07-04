import { Component, OnInit, Input } from '@angular/core';
import { Profissional } from 'src/app/profissional';

@Component({
  selector: 'app-profissionais-card',
  templateUrl: './profissionais-card.component.html',
  styleUrls: ['./profissionais-card.component.css']
})
export class ProfissionaisCardComponent implements OnInit {

  @Input() profissional: Profissional

  imgUrl: string;
  location: string;
  name: string;
  photo: string;
  services: string;

  constructor() { }

  ngOnInit(): void {
  }

}
