import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  public page! : number; 

  get resultados() 
  {
    return this.GifService.resultados;
  }

  constructor(private GifService: GifsService) { }
}
