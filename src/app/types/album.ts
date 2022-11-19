import { Track } from './track';

export interface Album {
  album_type: string;
  artists: Artist[];
  tracks: TrackBody
  images: Images[];
  name: string;
  type: string;
  id: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
}

export interface AlbumBody {
  href: string;
  items: Album[];
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

interface TrackBody {
  href: string;
  items:  Track[]
  limit: number;
  offset: number;
}