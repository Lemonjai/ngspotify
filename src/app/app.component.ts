import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Route } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [SearchComponent, AboutComponent]
})
export class AppComponent {}
