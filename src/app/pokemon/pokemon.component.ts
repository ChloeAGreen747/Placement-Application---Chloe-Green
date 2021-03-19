import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  id:string;
  specifiedPokemon:any;

  constructor(private route: ActivatedRoute, private pokemon:GetPokemonService) { }

  ngOnInit() {
    //Gets the ID of the selected Pokemon and passes it to the getPokemon service to fetch all the data about the specific Pokemon.
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.pokemon.getPokemon(`pokemon/${this.id}`).subscribe((result)=>{
        this.specifiedPokemon = result;
      })
    });
  }

}
