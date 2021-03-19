import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-directory',
  templateUrl: './pokemon-directory.component.html',
  styleUrls: ['./pokemon-directory.component.css']
})
export class PokemonDirectoryComponent implements OnInit {

  allPokemon:any; 
  config:any;
  totalPokemon:string;
  num: number;

  constructor(
    private pokemon:GetPokemonService, 
    private route: ActivatedRoute,
    private router: Router){ 
      this.config = {
        currentPage: 1,
        itemsPerPage: 50,
        totalItems: 0
      }
      route.queryParams.subscribe(
        params => this.config.currentPage = params['page'] ? params['page']:1
      )
  }

  pageChange(newPage: number) {
    //Navigates the user to the selected page and scrolls to the top of the page.
    this.router.navigate(['pokemon-directory'], { queryParams: { page: newPage }});
    window.scrollTo(0, 0);
  }

  ngOnInit(){
    //Runs the API once to get the total number of Pokemon
    this.pokemon.getPokemon("pokemon/").subscribe((result)=>{
      //Runs the API a second time sending the total number of Pokemon as the limit value in the URL.
      this.pokemon.getPokemon(`pokemon/?offset=0&limit=${result["count"]}`).subscribe((result)=>{
        this.allPokemon = result["results"];
      })
    })
  }

}
