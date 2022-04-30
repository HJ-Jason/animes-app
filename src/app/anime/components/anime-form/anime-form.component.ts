import { AnimeService } from './../../services/anime.service';
import { Anime } from './../../../core/models/anime';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimeFormData } from 'src/app/core/models/animeFormData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.scss'],
})
export class AnimeFormComponent implements OnInit {
  isUpdateMode: boolean;
  animeForm: FormGroup;

  types: string[] = ['Shounen', 'Shojo', 'Seinen'];
  constructor(
    private _formBuilder: FormBuilder,
    private _animeService: AnimeService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AnimeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnimeFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.animeForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.animeToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      title: [
        this.data.isUpdateMode ? this.data.animeToUpdate.title : '',
        Validators.required,
      ],
      author: [
        this.data.isUpdateMode ? this.data.animeToUpdate.author : '',
        Validators.required,
      ],
      type: [
        this.data.isUpdateMode ? this.data.animeToUpdate.type : '',
        Validators.required,
      ],
      releaseDate: [
        this.data.isUpdateMode ? this.data.animeToUpdate.releaseDate : '',
        Validators.required,
      ],
    });
  }

  closeForm(id?: number) {
    this.animeForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(anime: Anime) {
    if (this.animeForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._animeService.update(anime).subscribe((response) => {
          this.closeForm(anime.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._animeService.create(anime).subscribe((response) => {
          this.closeForm(anime.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }
}
