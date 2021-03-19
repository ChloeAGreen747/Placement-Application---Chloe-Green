import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-pokemon-games',
  templateUrl: './pokemon-games.component.html',
  styleUrls: ['./pokemon-games.component.css']
})
export class PokemonGamesComponent implements OnInit {

  pokemonGames:Array<any> = [];

  constructor(private pokemon:GetPokemonService) { }

  ngOnInit(): void {
    this.pokemon.getPokemon("generation/").subscribe((games)=>{
      //Uses the number of generations fetched from the API as the limit in the for loop
      for (let i=0; i<games["count"]; i++){
        //For each generation it appends a list incuding the name, id, main region and Pokemon species into the main pokemonGames array
        this.pokemon.getPokemon(`generation/${games["results"][i].name}`).subscribe((game)=>{
          let gameInfo = [game["name"], game["id"], game["main_region"], game["pokemon_species"]];
          this.pokemonGames.push(gameInfo);
        })
      }
    })
  }

}
