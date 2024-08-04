import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PontoTuristicoDetalheComponent } from './ponto-turistico-detalhe/ponto-turistico-detalhe.component';
export const routes: Routes = [
    {path: "detalhe/:id", component: PontoTuristicoDetalheComponent}
];
