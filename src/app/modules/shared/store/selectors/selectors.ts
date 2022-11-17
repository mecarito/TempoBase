import { createSelector } from '@ngrx/store';
import { Store, ArtistState } from 'app-types';


export const selectArtist = (state: Store) => state.artist;
export const selectArtistId = createSelector(selectArtist, (state: ArtistState) => state.id);
