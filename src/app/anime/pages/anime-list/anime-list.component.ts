import { Anime } from './../../../core/models/anime';
import { max, Observable, of } from 'rxjs';
import { AnimeService } from './../../services/anime.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AnimeFormComponent } from '../../components/anime-form/anime-form.component';
import { AnimeFormData } from 'src/app/core/models/animeFormData';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animes$: Observable<Anime[]>;
  displayedColumns: string[] = ['id', 'title', 'author', 'releaseDate'];

  //Bidouille
  ids: number[] = [];

  constructor(
    private _animeService: AnimeService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.animes$ = this._animeService.get();
  }

  showAnimeDetails(anime: Anime) {
    this._router.navigateByUrl('/animes/' + anime.id);
  }

  createAnime() {
    const animeFormData: AnimeFormData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    };

    const dialogRef = this._dialog.open(AnimeFormComponent, {
      data: animeFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }

  setId(id: number) {
    //Bidouille
    this.ids.push(id);
  }
}
