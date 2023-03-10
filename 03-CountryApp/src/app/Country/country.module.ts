import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByPaisComponent } from './pages/by-pais/by-pais.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import {NgxPaginationModule} from 'ngx-pagination'



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByPaisComponent,
    ByRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule
    
  ],
  exports:[
    ByCapitalComponent,
    ByPaisComponent,
    ByRegionComponent,
    VerPaisComponent,
    PaisTablaComponent
  ]
})
export class CountryModule { }
