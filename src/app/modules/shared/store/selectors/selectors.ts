import { createSelector } from '@ngrx/store';
import { Store, ArtistState, AlbumState, TrackState, Track } from 'app-types';

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
  selectTrack,
  (state: TrackState) => state
);

const selectFavorites = (state: Store) => state.favorites;
export const selectFavoriteTracks = createSelector(
  selectFavorites,
  (state: Track[]) => state
);
