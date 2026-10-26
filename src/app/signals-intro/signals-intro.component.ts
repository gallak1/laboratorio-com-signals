import { Component } from '@angular/core';
import { ElementoService, Elemento } from '../elemento.service';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrls: ['./signals-intro.component.css']
})
export class SignalsIntroComponent {
  constructor(
    public elementoService: ElementoService
  ) {}

  selecionarElemento(elemento: Elemento): void {
    this.elementoService.selecionarElemento(elemento);
  }
}
