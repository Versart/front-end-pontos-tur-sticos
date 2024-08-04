import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {GoogleMap} from '@angular/google-maps';
import { environment } from '../../environments/environment.development';




interface PontoTuristico {
  id: string;
  nome: string;
  latitude: string;
  longitude: string;
  foto: string;
}

@Component({
  selector: 'app-ponto-turistico-detalhe',
  standalone:true,
  imports: [CommonModule, HttpClientModule, GoogleMap],
  templateUrl: './ponto-turistico-detalhe.component.html',
  styleUrls: ['./ponto-turistico-detalhe.component.css']
})
export class PontoTuristicoDetalheComponent implements OnInit {
  pontoTuristico: PontoTuristico | undefined;

  center: google.maps.LatLngLiteral = {lat: 21, lng: 12};
  zoom = 4;
  display?: google.maps.LatLngLiteral;
  

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.center = {lat: Number(this.pontoTuristico?.latitude), lng: Number(this.pontoTuristico?.longitude)}
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<PontoTuristico>(`https://pontos-turisticos-backend.onrender.com/pontosturisticos/${id}`)
        .subscribe(data => {
          this.pontoTuristico = data;
        });
    }
    
  }

 

  
  
  
}
