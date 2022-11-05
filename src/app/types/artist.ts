export interface Artists {
  followers: Followers;
  id: string;
  images: Images[];
  name: string;
  popularity: number;
  type: string;
}

export interface ArtistBody {
  href: string;
  items: Artists[]
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
