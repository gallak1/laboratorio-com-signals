import { Component } from '@angular/core';
import { Elemento, ElementoService } from '../elemento.service';

@Component({
  selector: 'app-calculo-massa-elemento',
  templateUrl: './calculo-massa-elemento.component.html',
  styleUrls: ['./calculo-massa-elemento.component.css']
})
export class CalculoMassaElementoComponent {
  elementos!: Elemento[];

  constructor(
    public elementoService: ElementoService
  ) {
    this.elementos = this.elementoService.elementos;
  }

  selecionarElemento1(elemento: Elemento): void {
    this.elementoService.selecionarElemento1(elemento);
  }

  selecionarElemento2(elemento: Elemento): void {
    this.elementoService.selecionarElemento2(elemento);
  }

  elementoCalculado1(): Elemento | null {
    return this.elementoService.elementoCalculado1();
  }

  elementoCalculado2(): Elemento | null {
    return this.elementoService.elementoCalculado2();
  }

  massaAtomicaTotal(): number {
    return this.elementoService.massaAtomicaTotal();
  }
}
