import { Episode } from "./episode";

export interface Show {
  description: string;
  id: string;
  images: Images[];
  media_type: string;
  name: string;
  publisher: string;
  type: string;
  episodes: EpisodeBody;
}

export interface ShowBody {
  href: string;
  items: Show[];
  limit: number;
  offset: number;
}

interface Images {
  height: number;
  width: number;
  url: string;
}

interface EpisodeBody {
  href: string;
  items: Episode[]
  limit: number;
  total: number;
}
