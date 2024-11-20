export interface Book {
  id: number;
  title: string;
  img: number;
  category_id: number;
  isbn: string;
  form: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  pub_date: string;
  likes: number;
}

export interface BookDetail extends Book {
  category_name: string;
  liked: boolean;
}
