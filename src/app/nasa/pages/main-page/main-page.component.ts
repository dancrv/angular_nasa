import { Component } from '@angular/core';
import { NearEarthObject } from '../../interfaces/nasa.interface';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'nasa-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
  constructor(private nasaService: NasaService) {}

  get asteroids(): NearEarthObject[] {
    return this.nasaService.asteroidsList;
  }

  onDeleteAsteroid(id: string) {
    this.nasaService.deleteAsteroidById(id);
  }
}
