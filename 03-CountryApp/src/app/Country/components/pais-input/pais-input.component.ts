import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe( debounceTime(300) )
      .subscribe(valor => {
      this.onDebounce.emit( valor );
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPress() {

    this.debouncer.next(this.termino);
  }
}