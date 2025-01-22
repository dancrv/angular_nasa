import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NearEarthObject, OrbitingBody } from '../../interfaces/nasa.interface';

@Component({
  selector: 'nasa-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public asteroidsList: NearEarthObject[] = [];

  getOrbitingBodyName(orbitingBody: string | null | undefined): string {
    if (!orbitingBody) {
      return 'Cuerpo orbital desconocido';
    }
    return OrbitingBody[orbitingBody as keyof typeof OrbitingBody] || orbitingBody;
  }

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteAsteroid(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id);
  }

}
