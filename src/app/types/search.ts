import { ArtistBody} from './artist'

export interface SearchResults {
  tracks: Response;
  artists: ArtistBody
  albums: Response;
  playlists: Response;
  shows: Response;
  episodes: Response;
}

interface Response {
  href: string;
  items: any[];
  limit: number;
  offset: number;
}
