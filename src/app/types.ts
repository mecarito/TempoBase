export interface Album {
  name: string;
  artist: string;
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
