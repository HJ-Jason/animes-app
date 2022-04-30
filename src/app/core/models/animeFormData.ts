import { Anime } from './anime';

export interface AnimeFormData {
  isUpdateMode: boolean;
  animeToUpdate?: Anime;
  idToCreate?: number;
}
