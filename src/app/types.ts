export interface Album {
  name: string;
  artist: string;
}

export type Cards =
  | 'artist'
  | 'album'
  | 'playlist'
  | 'episode'
  | 'show'
  | 'topResult'
  | 'category'
  | 'artistDetail'
  | 'albumDetail';

export type TrackComponents = 'onPopular' | 'onAlbum' | 'onSearch' | 'onSongs';

export type Icons =
  | 'heart'
  | 'heart-green'
  | 'shuffle'
  | 'repeat'
  | 'skip-back'
  | 'skip-forward'
  | 'play-dark'
  | 'pause'
  | 'volume'
  | 'mute'
  | 'user'
  | 'chevron-filled'
  | 'chevron-left'
  | 'chevron-right'
  | 'search'
  | 'search-dark'
  | 'home'
  | 'library'
  | 'add'
  | 'heart-white'
  | 'play-white'
  | 'more-horizontal';

export interface User {
  country: string;
  display_name: string;
  email: string;
  product: string;
}

export namespace Response {
  export interface Authorization {
    access_token: string;
    token_type: string;
    expires_in: number;
  }
}

export namespace State {
  export interface Auth {
    access_token: string;
  }
}
