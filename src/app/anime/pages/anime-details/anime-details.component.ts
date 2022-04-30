import { AnimeFormData } from './../../../core/models/animeFormData';
import { AnimeFormComponent } from './../../components/anime-form/anime-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from './../../services/anime.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/core/models/anime';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss'],
})
export class AnimeDetailsComponent implements OnInit {
  anime$: Observable<Anime>;
  constructor(
    private _animeService: AnimeService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
    });
  }

  fetchData(id: number) {
    this.anime$ = this._animeService.getById(id);
  }

  updateAnime(anime: Anime) {
    const animeFormData: AnimeFormData = {
      isUpdateMode: true,
      animeToUpdate: anime,
    };

    const dialogRef = this._dialog.open(AnimeFormComponent, {
      data: animeFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deleteAnime(id: number) {
    this._animeService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/animes');
    });
  }

  goBack() {
    this._location.back();
  }
}
