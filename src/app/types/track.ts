export interface Track {
  id: string;
  name: string;
  type: string;
  preview_url: string;
  popularity: number;
  track_number: number;
  duration_ms: number;
  disc_number: number;
  artists: Artist[];
  album: Album
}

export interface PlaylistTrack {
  track: Track
}

export interface ArtistTracks {
  tracks: Track[]
}

export interface TrackBody {
  href: string;
  items: Track[];
  limit: number;
  offset: number;
}

interface Images {
  height: number;
  width: number;
  url: string;
}

interface Artist {
  id: string;
  name: string;
  type: string;
}


interface Album {
  album_type: string;
  artists: Artist[];
  images: Images[];
  name: string;
  type: string;
  id: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
}
