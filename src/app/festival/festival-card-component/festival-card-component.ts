import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Festival } from '../Festival';

@Component({
  imports: [],
  selector: 'app-festival-card-component',
  styleUrl: './festival-card-component.css',
  templateUrl: './festival-card-component.html',
})
export class FestivalCardComponent {

  festival: WritableSignal<Festival> = signal<Festival>({
    id: 1,
    name: 'Festival de Nîmes',
    location: 'Nîmes',
    year: 2024
  });

  editionLabel = computed(() => `${this.festival().name} - Édition ${this.festival().year}`);

  // other example
  // count: WritableSignal<number> = signal<number>(0);
  //   dcount = computed(() => this.count() * 2);
  //
  //
  //   status = computed(() =>
  //     this.count() > 0 ? 'Compteur positif' : this.count() < 0 ? 'Compteur négatif' : 'Compteur nul',
  //   );
  //
  //   // Méthodes pour réagir aux clics du template
  //
  //   increment(): void {
  //     this.count.update((c) => c + 1);
  //   }

  incrementYear() {
    this.festival.update(current => ({ ...current, year:current.year+1 })) ;
  }

}



