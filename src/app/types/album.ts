export interface Album {
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
