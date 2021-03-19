import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  constructor(private http:HttpClient) { }

  getPokemon(path:String) {
    //Fetches the data at the specified path
    return this.http.get(`https://pokeapi.co/api/v2/${path}`);
  }
}
