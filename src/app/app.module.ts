import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonDirectoryComponent } from './pokemon-directory/pokemon-directory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonGamesComponent } from './pokemon-games/pokemon-games.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NavbarComponent,
    PokemonDirectoryComponent,
    PokemonGamesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      //Defines the component it should display based on the path given.
      { path:'pokemon-directory', component: PokemonDirectoryComponent },
      { path:'pokemon/:id', component: PokemonComponent },
      { path:'generations', component: PokemonGamesComponent },
      { path:'', component: HomepageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
