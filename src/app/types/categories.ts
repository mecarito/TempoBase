export interface CategoriesResponse {
  categories: CategoriesBody;
}

interface Icon {
  height: number;
  width: number;
  url: string;
}

interface CategoryItems {
  href: string;
  id: string;
  name: string;
  icons: Icon[];
}

interface CategoriesBody {
  href: string;
  items: CategoryItems;
  limit: number;
  offset: number;
}
