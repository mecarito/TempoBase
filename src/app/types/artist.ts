export interface Artist {
  followers: Followers;
  id: string;
  images: Images[];
  name: string;
  popularity: number;
  type: string;
}

export interface RelatedArtists {
  artists: Artist[];
}

export interface ArtistBody {
  href: string;
  items: Artist[]
  limit: number;
  offset: number;
}

interface Images {
  height: number;
  width: number;
  url: string;
}

interface Followers {
  href: string;
  total: number;
}
