export interface CategoriesResponse {
  categories: CategoriesBody;
}

export interface Categories {
  href: string;
  id: string;
  name: string;
  icons: Icon[]
}

interface CategoriesBody {
  href: string;
  items: Categories[]
  limit: number;
  offset: number;
}

interface Icon {
  height: number;
  width: number;
  url: string;
}

