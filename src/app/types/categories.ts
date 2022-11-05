export interface CategoriesResponse {
  categories: CategoriesBody;
}

export interface Categories {
  href: string;
  id: string;
  name: string;
  icons: Images[]
}

interface CategoriesBody {
  href: string;
  items: Categories[]
  limit: number;
  offset: number;
}

interface  Images {
  height: number;
  width: number;
  url: string;
}

