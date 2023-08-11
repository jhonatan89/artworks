import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  constructor(private http: HttpClient) {}

  loadArtworks(): Observable<any> {
    return this.http.get('https://api.artic.edu/api/v1/artworks');
  }
}
