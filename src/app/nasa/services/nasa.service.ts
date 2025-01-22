import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NearEarthObject, SearchResponse } from './../interfaces/nasa.interface';
import { AstroPic } from '../interfaces/astro-pic.interface';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  public asteroidsList: NearEarthObject[] = [];
  public astronomicPic!: AstroPic;
  private _nasa_api_key: string = 'dIvfKcePlbRIpUd011ssmRUOdm6DqktdzP1j6Njk';
  private _serviceUrl: string = 'https://api.nasa.gov/neo/rest/v1/neo/browse?';
  private _serviceUrl2: string = 'https://api.nasa.gov/planetary/apod?';

  constructor(private http: HttpClient) {
    this.searchAsteroids();
    this.getAstronomicPic();
  }

  searchAsteroids(): void {
    const params = new HttpParams()
      .set('api_key', this._nasa_api_key)
    this.http.get<SearchResponse>(`${this._serviceUrl}`, {params})
      .subscribe(resp => {
        this.asteroidsList = resp.near_earth_objects;
      })
  }

  deleteAsteroidById(id: string) {
    this.asteroidsList = this.asteroidsList.filter(asteroid => asteroid.id != id);
  }

  getAstronomicPic(): void {
    const params = new HttpParams()
      .set('api_key', this._nasa_api_key)
    this.http.get<AstroPic>(`${this._serviceUrl2}`, {params})
      .subscribe(resp => {
        this.astronomicPic = resp;
      })
  }
}
