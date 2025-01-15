import { Injectable } from '@angular/core';
import { Planet } from '../interfaces/planets.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  public planets: Planet[] = [
    {
      id: uuid(),
      name: 'Mercurio',
      size: 4.879
    },
    {
      id: uuid(),
      name: 'Venus',
      size: 12.104
    },
    {
      id: uuid(),
      name: 'Tierra',
      size: 12.756
    },
    {
      id: uuid(),
      name: 'Marte',
      size: 6.779
    },
    {
      id: uuid(),
      name: 'Júpiter',
      size: 139.820
    },
    {
      id: uuid(),
      name: 'Saturno',
      size: 116.460
    },
  ]

  addPlanet(planet: Planet): void {
    const newPlanet: Planet = { id: uuid(), ...planet}
    this.planets.push(newPlanet);
  }

  deletePlanetById(id: string) {
    this.planets = this.planets.filter(planet => planet.id != id);
  }
}
