import { PlaylistTrack } from "./track";

export interface Playlist {
  owner: Owner;
  collaborative: boolean;
  id: string;
  images: Images[];
  name: string;
  followers: Followers;
  description: string;
  type: string;
  tracks: Tracks;
}

export interface PlaylistBody {
  href: string;
  items: Playlist[];
  limit: number;
  offset: number;
}

interface Images {
  height: number;
  width: number;
  url: string;
}

interface Owner {
  display_name: string;
  id: string;
  type: string;
}

interface Tracks {
  href: string;
  total: number;
  items: PlaylistTrack[]
}

interface Followers {
  href: string;
  total: number;
}
