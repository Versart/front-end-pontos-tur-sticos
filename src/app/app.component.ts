import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

interface PontoTuristico {
  id: string;
  nome: string;
  latitude: string;
  longitude: string;
  foto: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para styleUrls
})
export class AppComponent implements OnInit {
  title = 'guia-turistico-maranhao';
  myControl = new FormControl();
  options: PontoTuristico[] = [];
  filteredOptions: Observable<PontoTuristico[]> | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filter(value || ''))
    );
    this.loadOptions();
  }

  private _filter(value: string): Observable<PontoTuristico[]> {
    return this.http.get<PontoTuristico[]>("https://pontos-turisticos-backend.onrender.com/pontosturisticos")
      .pipe(
        map(options => options.filter(option => typeof value === 'string' && option.nome.toLowerCase().includes(value.toLowerCase())))
      );
  }

  private loadOptions() {
    this.http.get<PontoTuristico[]>("https://pontos-turisticos-backend.onrender.com/pontosturisticos")
      .subscribe(data => {
        this.options = data;
      });
  }

  onOptionSelected(event: any) {
    const selectedOption = this.options.find(option => option.nome === event.option.value);
    if (selectedOption) {
      this.router.navigate(['/detalhe', selectedOption.id]);
    }
  }
}

//opção quase funcional
