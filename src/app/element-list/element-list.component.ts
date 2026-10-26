import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Elemento, ElementoService } from '../elemento.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementListComponent {

  constructor(
    public elementoService: ElementoService
  ) {}

  selecionarElemento(elemento: Elemento): void {
    this.elementoService.selecionarElemento(elemento);
  }

  alternarFavorito(elemento: Elemento): void {
    if(this.elementoService.obterFavoritos().includes(elemento)) {
      this.elementoService.removerFavoritos(elemento);
    } else {
      this.elementoService.adicionarFavorito(elemento);
    }
  }
}
