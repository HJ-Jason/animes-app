import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { AnimeDetailsComponent } from './pages/anime-details/anime-details.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { AnimeComponent } from './anime.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeComponent,
    children: [
      { path: ':id', component: AnimeDetailsComponent },
      { path: '', component: AnimeListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class animeRoutingModule {}
