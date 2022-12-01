import { createSelector } from '@ngrx/store';
import { Store, ArtistState, AlbumState } from 'app-types';

const selectArtist = (state: Store) => state.artist;
export const selectArtistId = createSelector(
  selectArtist,
  (state: ArtistState) => state.id
);

const selectAlbum = (state: Store) => state.album;
export const selectAlbumId = createSelector(
  selectAlbum,
  (state: AlbumState) => state.id
);

const selectTrack = (state: Store) => state.track;
export const selectTrackData = createSelector(
  selectAlbum,
  (state: AlbumState) => state
);
