import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Planet } from '../../interfaces/planets.interface';

@Component({
  selector: 'nasa-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public planetList: Planet[] = []

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePlanet(id?: string): void {
    if (!id) return;
    
    console.log(id);

    this.onDelete.emit(id);
  }
}
