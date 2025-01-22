import { Component } from '@angular/core';
import { AstroPic } from '../../interfaces/astro-pic.interface';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'nasa-pic',
  standalone: false,

  templateUrl: './nasa-pic.component.html',
  styleUrl: './nasa-pic.component.css'
})
export class NasaPicComponent {
  constructor(private nasaService: NasaService) {}

  get astroPic(): AstroPic {
    return this.nasaService.astronomicPic;
  }

}
