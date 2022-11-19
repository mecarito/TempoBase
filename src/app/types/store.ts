export interface Store {
  artist: ArtistState;
  album: AlbumState;
}

export interface ArtistState {
  id: string;
}

export interface AlbumState {
  id: string;
}
