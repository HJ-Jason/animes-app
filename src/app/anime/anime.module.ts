import { AnimeService } from './services/anime.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { animeRoutingModule } from './anime-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AnimeComponent } from './anime.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { AnimeDetailsComponent } from './pages/anime-details/anime-details.component';
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AnimeComponent,
    AnimeListComponent,
    AnimeDetailsComponent,
    AnimeFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    animeRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  providers: [
    AnimeService,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
  ],
})
export class AnimeModule {}
