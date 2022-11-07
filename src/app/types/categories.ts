export interface CategoriesResponse {
  categories: CategoriesBody;
}

export interface Category {
  href: string;
  id: string;
  name: string;
  icons: Images[]
}

interface CategoriesBody {
  href: string;
  items: Category[]
  limit: number;
  offset: number;
}

interface  Images {
  height: number;
  width: number;
  url: string;
}

