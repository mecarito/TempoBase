export interface Store {
  artist: ArtistState;
  album: AlbumState;
  track: TrackState;
}

export interface ArtistState {
  id: string;
}

export interface AlbumState {
  id: string;
}

export interface TrackState {
  images: TrackImages[];
  previewUrl: string;
  trackName: string;
  artistName: string;
}

export interface TrackImages {
  height: number;
  width: number;
  url: string;
}
