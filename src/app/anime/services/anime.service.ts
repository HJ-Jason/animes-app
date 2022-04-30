import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Anime } from 'src/app/core/models/anime';
import { environment } from 'src/environments/environment';

@Injectable()
export class AnimeService {
  private readonly animePath: string = '/animes';

  constructor(private _http: HttpClient) {}

  get(): Observable<Anime[]> {
    return this._http.get<Anime[]>(
      `${environment.apiBaseUrl}${this.animePath}`
    );
  }

  put(anime: Anime): Observable<Anime> {
    return this._http.put<Anime>(
      `${environment.apiBaseUrl}${this.animePath}/${anime.id}`,
      anime
    );
  }

  post(anime: Anime): Observable<Anime> {
    return this._http.post<Anime>(
      `${environment.apiBaseUrl}${this.animePath}`,
      anime
    );
  }

  delete(id: number): Observable<any> {
    return this._http.delete(
      `${environment.apiBaseUrl}${this.animePath}/${id}`
    );
  }

  getById(id: number): Observable<Anime> {
    return this._http.get<Anime>(
      `${environment.apiBaseUrl}${this.animePath}/${id}`
    );
  }

  create(student: Anime): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.animePath}`,
      student
    );
  }

  update(student: Anime): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.animePath}/${student.id}`,
      student
    );
  }
}
