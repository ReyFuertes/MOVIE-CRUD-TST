import { Injectable } from "@angular/core";
import { Observable, filter, map, of } from "rxjs";
import { IMovie } from "./movie.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { moviesStudData } from "../stub";

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(
    public http: HttpClient) {
  }

  public getById(id: string): Observable<IMovie | undefined> {
    return of(moviesStudData).pipe(map((item) => {
      return item.find(value => value.id === id);
    }));
  }

  public getAll(): Observable<IMovie[]> {
    return of(moviesStudData);
  }
}