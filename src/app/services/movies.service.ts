import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../model/movie';

const enum endpoint {
  latest='/movie/latest',
  now_playing='/movie/now_playing',
  popular='/movie/popular',
  top_rated='/movie/top_rated',
  upcoming='/movie/upcoming',
  trending='/trending/all/week',
  originals='/discover/tv'
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private URL ='https://api.themoviedb.org/3'
  private api_key =environment.api
  

  constructor(private http:HttpClient) { }
  
  getTrending():Observable<any>{
    return this.http.get<Movies>('https://api.themoviedb.org/3/trending/all/week?api_key=38723bf24c26ec82a87a9437feaf8730')
  }

  getNowplaying():Observable<Movies>{
    return this.http.get<Movies>('https://api.themoviedb.org/3/movie/now_playing?api_key=38723bf24c26ec82a87a9437feaf8730')
  }

  getPopular():Observable<Movies>{
    return this.http.get<Movies>('https://api.themoviedb.org/3/movie/popular?api_key=38723bf24c26ec82a87a9437feaf8730')
  }

  getOriginals():Observable<Movies>{
    return this.http.get<Movies>('https://api.themoviedb.org/3/discover/tv?api_key=38723bf24c26ec82a87a9437feaf8730')
  }

  getTopRated():Observable<Movies>{
    return this.http.get<Movies>('https://api.themoviedb.org/3/movie/top_rated?api_key=38723bf24c26ec82a87a9437feaf8730')
  }
  
}
