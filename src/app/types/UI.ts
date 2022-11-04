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

export namespace State {
  export interface Auth {
    access_token: string;
  }
}
