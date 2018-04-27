export interface IBookResult {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[];
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
      small?: string;
      medium?: string;
      large?: string;
      extraLarge?: string;
    }
  };
}
