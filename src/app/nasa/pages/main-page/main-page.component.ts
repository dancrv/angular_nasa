import { Component } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { Planet } from '../../interfaces/planets.interface';

@Component({
  selector: 'nasa-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private nasaService: NasaService) {

  }

  get planets(): Planet[] {
    return [...this.nasaService.planets];
  }

  onNewPlanet(planet: Planet) {
    this.nasaService.addPlanet(planet);
  }

  onDeletePlanet(id: string): void {
    this.nasaService.deletePlanetById(id);
  }
}
