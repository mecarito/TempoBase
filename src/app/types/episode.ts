import { Show } from './show';

export interface Episode {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  id: string;
  images: Images[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  show: Show;
}

export interface EpisodeBody {
  href: string;
  items: Episode[];
  limit: number;
  offset: number;
}

interface Images {
  height: number;
  width: number;
  url: string;
}
