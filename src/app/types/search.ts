// import { ArtistBody} from './artist'
import {
  ArtistBody,
  TrackBody,
  AlbumBody,
  PlaylistBody,
  ShowBody,
  EpisodeBody,
} from './index';

export interface SearchResults {
  tracks: TrackBody;
  artists: ArtistBody;
  albums: AlbumBody;
  playlists: PlaylistBody;
  shows: ShowBody;
  episodes: EpisodeBody;
}
