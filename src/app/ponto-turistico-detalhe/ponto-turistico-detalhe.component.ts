import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, HttpClientModule],
  templateUrl: './ponto-turistico-detalhe.component.html',
  styleUrls: ['./ponto-turistico-detalhe.component.css']
})
export class PontoTuristicoDetalheComponent implements OnInit {
  pontoTuristico: PontoTuristico | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<PontoTuristico>(`https://pontos-turisticos-backend.onrender.com/pontosturisticos/${id}`)
        .subscribe(data => {
          this.pontoTuristico = data;
        });
    }
  }
}
