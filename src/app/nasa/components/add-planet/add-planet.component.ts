import { Component, EventEmitter, Output } from '@angular/core';
import { Planet } from '../../interfaces/planets.interface';

@Component({
  selector: 'nasa-add-planet',
  standalone: false,

  templateUrl: './add-planet.component.html',
  styleUrl: './add-planet.component.css'
})
export class AddPlanetComponent {

  @Output()
  public onNewPlanet: EventEmitter<Planet> = new EventEmitter();

  public planet: Planet = {
    name: '',
    size: 0
  };

  emitPlanet(): void {
    if (this.planet.name.length == 0) return;

    this.onNewPlanet.emit(this.planet);

    this.planet = { name: '', size: 0};
  }
}
