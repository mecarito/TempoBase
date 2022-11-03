export interface Album {
  name: string;
  artist: string;
}

export type CardVariants =
  | 'artist'
  | 'album'
  | 'playlist'
  | 'episode'
  | 'show'
  | 'topResult'
  | 'category'
  | 'artistDetail'
  | 'albumDetail';

export type TrackComponentVariant =
  | 'onPopular'
  | 'onAlbum'
  | 'onSearch'
  | 'onSongs';

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
